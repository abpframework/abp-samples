using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using ModularCrm.Ordering.Entities;
using ModularCrm.Ordering.Enums;
using ModularCrm.Payment.Payment;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Ordering.Services;

public class OrderPaymentCompletedEventHandler : IDistributedEventHandler<PaymentCompletedEto>, ITransientDependency
{
    private readonly ILogger<OrderPaymentCompletedEventHandler> _logger;
    private readonly IRepository<Order, Guid> _orderRepository;

    public OrderPaymentCompletedEventHandler(ILogger<OrderPaymentCompletedEventHandler> logger, IRepository<Order, Guid> orderRepository)
    {
        _logger = logger;
        _orderRepository = orderRepository;
    }

    public async Task HandleEventAsync(PaymentCompletedEto eventData)
    {
        _logger.LogInformation($"[Ordering Module] PaymentCompletedEto event received: OrderId: {eventData.OrderId}, PaymentId: {eventData.Id}, PaymentMethod: {eventData.Method}, PaymentAmount: {eventData}");

        var order = await _orderRepository.GetAsync(eventData.OrderId);
        order.State = OrderState.Delivered;
        await _orderRepository.UpdateAsync(order);

        _logger.LogInformation($"[Ordering Module] Order state updated to Delivered for OrderId: {eventData.OrderId}");
    }
}
