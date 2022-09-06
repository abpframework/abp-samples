using MassTransit;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Services;
using Volo.Abp.EventBus.Distributed;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderManager : DomainService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IDistributedEventBus _distributedEventBus;
    private readonly IBus _bus;

    public OrderManager(
        IOrderRepository orderRepository,
        IDistributedEventBus distributedEventBus,
        IBus bus)
    {
        _orderRepository = orderRepository;
        _distributedEventBus = distributedEventBus;
        _bus = bus;
    }

    public async Task<Order> CreateOrderAsync(
        string paymentMethod,
        Guid buyerId,
        string buyerName,
        string buyerEmail,
        List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount, string
                pictureUrl, int units)>
            orderItems,
        string addressStreet,
        string addressCity,
        string addressCountry,
        string addressZipCode,
        string addressDescription = null
    )
    {
        // Create new order
        Order order = new Order(
            id: GuidGenerator.Create(),
            buyer: new Buyer(buyerEmail, buyerName, buyerId),
            address: new Address(street: addressStreet,
                city: addressCity,
                country: addressCountry,
                zipcode: addressZipCode,
                description: addressDescription),
            paymentMethod: paymentMethod
        );

        // Add new order items
        foreach (var orderItem in orderItems)
        {
            order.AddOrderItem(
                id: GuidGenerator.Create(),
                productId: orderItem.productId,
                productName: orderItem.productName,
                productCode: orderItem.productCode,
                unitPrice: orderItem.unitPrice,
                discount: orderItem.discount,
                pictureUrl: orderItem.pictureUrl,
                units: orderItem.units
            );
        }

        var placedOrder = await _orderRepository.InsertAsync(order, true);


        // Publish Order placed event
        await _distributedEventBus.PublishAsync(new OrderPlacedEto
        {
            OrderId = placedOrder.Id,
            OrderDate = placedOrder.OrderDate,
            OrderNo = placedOrder.OrderNo,
            Buyer = GetBuyerEto(order.Buyer),
            Items = GetProductItemEtoList(order.OrderItems)
        });

        return placedOrder;
    }

    public async Task<Order> AcceptOrderAsync(Guid orderId, Guid paymentRequestId, string paymentRequestStatus)
    {
        var order = await _orderRepository.GetAsync(orderId);
        if (order == null)
        {
            throw new BusinessException(OrderingServiceErrorCodes.OrderWithIdNotFound)
                .WithData("OrderId", orderId);
        }

        order.SetOrderAccepted(paymentRequestId, paymentRequestStatus);
        return await _orderRepository.UpdateAsync(order, autoSave: true);
    }

    public async Task<Order> CancelOrderAsync(Guid orderId)
    {
        var order = await _orderRepository.GetAsync(orderId);
        if (order == null)
        {
            throw new BusinessException(OrderingServiceErrorCodes.OrderWithIdNotFound)
                .WithData("OrderId", orderId);
        }

        order.SetOrderCancelled();

        await _bus.Publish(new OrderCancelledEto
        {
            PaymentRequestId = order.PaymentRequestId.GetValueOrDefault(),
            OrderId = order.Id,
            OrderDate = order.OrderDate,
            OrderNo = order.OrderNo,
            Buyer = GetBuyerEto(order.Buyer),
            Items = GetProductItemEtoList(order.OrderItems)
        });
        
        // Publish order cancelled event
        //await _distributedEventBus.PublishAsync(new OrderCancelledEto
        //{
        //    PaymentRequestId = order.PaymentRequestId.GetValueOrDefault(),
        //    OrderId = order.Id,
        //    OrderDate = order.OrderDate,
        //    OrderNo = order.OrderNo,
        //    Buyer = GetBuyerEto(order.Buyer),
        //    Items = GetProductItemEtoList(order.OrderItems)
        //});

        return await _orderRepository.UpdateAsync(order, autoSave: true);
    }

    private BuyerEto GetBuyerEto(Buyer buyer)
    {
        return new BuyerEto
        {
            BuyerEmail = buyer.Email,
            BuyerName = buyer.Name,
            BuyerId = buyer.Id
        };
    }

    private List<OrderItemEto> GetProductItemEtoList(List<OrderItem> orderItems)
    {
        List<OrderItemEto> etoList = new List<OrderItemEto>();
        foreach (var oItem in orderItems)
        {
            etoList.Add(new OrderItemEto()
            {
                Discount = oItem.Discount,
                PictureUrl = oItem.PictureUrl,
                ProductCode = oItem.ProductCode,
                ProductId = oItem.ProductId,
                ProductName = oItem.ProductName,
                UnitPrice = oItem.UnitPrice,
                Units = oItem.Units
            });
        }

        return etoList;
    }
}