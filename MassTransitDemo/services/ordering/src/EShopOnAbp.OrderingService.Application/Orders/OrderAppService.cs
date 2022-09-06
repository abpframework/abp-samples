using EShopOnAbp.OrderingService.Localization;
using EShopOnAbp.OrderingService.OrderItems;
using EShopOnAbp.OrderingService.Orders.Specifications;
using EShopOnAbp.OrderingService.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Specifications;
using Volo.Abp.Users;

namespace EShopOnAbp.OrderingService.Orders;

[Authorize(OrderingServicePermissions.Orders.Default)]
public class OrderAppService : ApplicationService, IOrderAppService
{
    private readonly OrderManager _orderManager;
    private readonly IOrderRepository _orderRepository;

    public OrderAppService(OrderManager orderManager,
        IOrderRepository orderRepository
    )
    {
        _orderManager = orderManager;
        _orderRepository = orderRepository;
        LocalizationResource = typeof(OrderingServiceResource);
        ObjectMapperContext = typeof(OrderingServiceApplicationModule);
    }

    public async Task<OrderDto> GetAsync(Guid id)
    {
        var order = await _orderRepository.GetAsync(id);
        return CreateOrderDtoMapping(order);
    }

    [AllowAnonymous]
    public async Task<List<OrderDto>> GetMyOrdersAsync(GetMyOrdersInput input)
    {
        ISpecification<Order> specification = SpecificationFactory.Create(input.Filter);
        var orders = await _orderRepository.GetOrdersByUserId(CurrentUser.GetId(), specification, true);
        return CreateOrderDtoMapping(orders);
    }

    public async Task<List<OrderDto>> GetOrdersAsync(GetOrdersInput input)
    {
        ISpecification<Order> specification = SpecificationFactory.Create(input.Filter);
        var orders = await _orderRepository.GetOrdersAsync(specification, true);
        return CreateOrderDtoMapping(orders);
    }

    public async Task<PagedResultDto<OrderDto>> GetListPagedAsync(PagedAndSortedResultRequestDto input)
    {
        var orders = await _orderRepository.GetPagedListAsync(input.SkipCount, input.MaxResultCount, input.Sorting ?? "OrderDate", true);

        var totalCount = await _orderRepository.GetCountAsync();
        return new PagedResultDto<OrderDto>(
            totalCount,
            CreateOrderDtoMapping(orders)
        );
    }

    [Authorize(OrderingServicePermissions.Orders.Dashboard)]
    public async Task<DashboardDto> GetDashboardAsync(DashboardInput input)
    {
        return new DashboardDto()
        {
            TopSellings = await GetTopSellingAsync(input.Filter),
            OrderStatusDto = await GetCountOfTotalOrderStatusAsync(input.Filter),
            Payments = await GetPercentOfTotalPaymentAsync(input.Filter)
        };
    }
    private async Task<List<TopSellingDto>> GetTopSellingAsync(string filter)
    {
        ISpecification<Order> specification = SpecificationFactory.Create(filter);
        var orderItems = await _orderRepository.GetTopSelling(specification, true);
        return ObjectMapper.Map<List<OrderItem>, List<TopSellingDto>>(orderItems);
    }

    private async Task<List<PaymentDto>> GetPercentOfTotalPaymentAsync(string filter)
    {
        ISpecification<Order> specification = SpecificationFactory.Create(filter);
        var orders = await _orderRepository.GetPercentOfTotalPayment(specification);
        return CreatePaymentDtoMapping(orders);
    }

    private async Task<List<OrderStatusDto>> GetCountOfTotalOrderStatusAsync(string filter)
    {
        ISpecification<Order> specification = SpecificationFactory.Create(filter);
        var orders = await _orderRepository.GetCountOfTotalOrderStatus(specification, true);
        return CreateOrderStatusDtoMapping(orders);
    }

    [AllowAnonymous]
    public async Task<OrderDto> GetByOrderNoAsync(int orderNo)
    {
        var order = await _orderRepository.GetByOrderNoAsync(orderNo);
        Logger.LogInformation($" Order recieved with order no:{orderNo}");
        return CreateOrderDtoMapping(order);
    }

    [Authorize(OrderingServicePermissions.Orders.SetAsCancelled)]
    public async Task SetAsCancelledAsync(Guid id)
    {
        await _orderManager.CancelOrderAsync(id);
    }

    [Authorize(OrderingServicePermissions.Orders.SetAsShipped)]
    public async Task SetAsShippedAsync(Guid id)
    {

        var order = await _orderRepository.GetAsync(id);
        order.SetOrderAsShipped();
        await _orderRepository.UpdateAsync(order);
    }

    [AllowAnonymous]
    public async Task<OrderDto> CreateAsync(OrderCreateDto input)
    {
        var orderItems = GetProductListTuple(input.Products);

        var placedOrder = await _orderManager.CreateOrderAsync
        (
            paymentMethod: input.PaymentMethod,
            buyerId: CurrentUser.GetId(),
            buyerName: CurrentUser.Name,
            buyerEmail: CurrentUser.Email,
            orderItems: orderItems,
            addressStreet: input.Address.Street,
            addressCity: input.Address.City,
            addressCountry: input.Address.Country,
            addressZipCode: input.Address.ZipCode,
            addressDescription: input.Address.Description
        );

        return CreateOrderDtoMapping(placedOrder);
    }


    private List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount, string
        pictureUrl, int units
        )> GetProductListTuple(List<OrderItemCreateDto> products)
    {
        var orderItems =
            new List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
                string pictureUrl, int
                units)>();
        foreach (var product in products)
        {
            orderItems.Add((product.ProductId, product.ProductName, product.ProductCode, product.UnitPrice,
                product.Discount, product.PictureUrl, product.Units));
        }

        return orderItems;
    }

    private List<OrderDto> CreateOrderDtoMapping(List<Order> orders)
    {
        List<OrderDto> dtoList = new List<OrderDto>();
        foreach (var order in orders)
        {
            dtoList.Add(CreateOrderDtoMapping(order));
        }

        return dtoList;
    }

    private OrderDto CreateOrderDtoMapping(Order order)
    {
        return new OrderDto()
        {
            Address = ObjectMapper.Map<Address, OrderAddressDto>(order.Address),
            Items = ObjectMapper.Map<List<OrderItem>, List<OrderItemDto>>(order.OrderItems),
            Buyer = ObjectMapper.Map<Buyer, BuyerDto>(order.Buyer),
            Id = order.Id,
            OrderNo = order.OrderNo,
            OrderDate = order.OrderDate,
            OrderStatus = order.OrderStatus,
            PaymentMethod = order.PaymentMethod
        };
    }

    private List<PaymentDto> CreatePaymentDtoMapping(List<Order> orders)
    {
        var payments = orders
                    .GroupBy(p => p.PaymentMethod)
                    .Select(p => new PaymentDto { RateOfPaymentMethod = p.Count(), PaymentMethod = p.Key })
                    .OrderBy(p => p.RateOfPaymentMethod)
                    .ToList();

        var denominator = payments.Sum(p => p.RateOfPaymentMethod);
        if (denominator != 0)
        {
            decimal rate = 100 / payments.Sum(p => p.RateOfPaymentMethod);
            payments.ForEach(p => p.RateOfPaymentMethod *= rate);
        }
        return payments;
    }

    private List<OrderStatusDto> CreateOrderStatusDtoMapping(List<Order> orders)
    {
        var orderStatus = orders
                    .GroupBy(p => p.OrderStatus)
                    .Select(p => new OrderStatusDto { CountOfStatusOrder = p.Count(), OrderStatus = p.Key.ToString(), })
                    .OrderBy(p => p.CountOfStatusOrder)
                    .ToList();

        decimal totalIncome = orders.Sum(p => p.OrderItems.Sum(p => p.Units * p.UnitPrice));

        orderStatus.Add(new OrderStatusDto() { OrderStatus = "Total Income", TotalIncome = totalIncome });

        return orderStatus;
    }
}