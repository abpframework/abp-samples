using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModularCrm.Ordering.Events;
using ModularCrm.Products.Integration;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Ordering.Services;

public class OrderAppService : OrderingAppService, IOrderAppService
{
    private readonly IRepository<Order, Guid> _orderRepository;
    private readonly IProductIntegrationService _productIntegrationService;
    private readonly IDistributedEventBus _distributedEventBus;

    public OrderAppService(
        IRepository<Order, Guid> orderRepository,
        IProductIntegrationService productIntegrationService,
        IDistributedEventBus distributedEventBus)
    {
        _orderRepository = orderRepository;
        _productIntegrationService = productIntegrationService;
        _distributedEventBus = distributedEventBus;
    }

    public async Task<List<OrderDto>> GetListAsync()
    {
        var orders = await _orderRepository.GetListAsync();

        // Prepare a list of products we need
        var productIds = orders.Select(o => o.ProductId).Distinct().ToList();
        var products = (await _productIntegrationService
            .GetProductsByIdsAsync(productIds))
            .ToDictionary(p => p.Id, p => p.Name);

        var orderDtos = ObjectMapper.Map<List<Order>, List<OrderDto>>(orders);

        orderDtos.ForEach(orderDto =>
        {
            orderDto.ProductName = products[orderDto.ProductId];
        });

        return orderDtos;
    }

    public async Task CreateAsync(OrderCreationDto input)
    {
        // Create a new Order entity
        var order = new Order
        {
            CustomerName = input.CustomerName,
            ProductId = input.ProductId,
            State = OrderState.Placed
        };

        // Save it to the database
        await _orderRepository.InsertAsync(order);

        // Publish an event so other modules can be informed
        await _distributedEventBus.PublishAsync(
            new OrderPlacedEto
            {
                ProductId = order.ProductId,
                CustomerName = order.CustomerName
            });
    }
}