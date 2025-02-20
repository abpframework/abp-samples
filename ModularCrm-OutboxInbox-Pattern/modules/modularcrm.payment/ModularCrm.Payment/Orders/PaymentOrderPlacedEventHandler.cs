using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using ModularCrm.Ordering.Events;
using ModularCrm.Payment.Entities;
using ModularCrm.Payment.Payment;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Payment.Orders
{
    public class PaymentOrderPlacedEventHandler : IDistributedEventHandler<OrderPlacedEto>, ITransientDependency
    {
        private readonly ILogger<PaymentOrderPlacedEventHandler> _logger;
        private readonly IRepository<PaymentRecord, Guid>  _paymentRecordRepository;
        private readonly IDistributedEventBus _distributedEventBus;

        public PaymentOrderPlacedEventHandler(ILogger<PaymentOrderPlacedEventHandler> logger, IRepository<PaymentRecord, Guid> paymentRecordRepository,  IDistributedEventBus distributedEventBus)
        {
            _logger = logger;
            _paymentRecordRepository = paymentRecordRepository;
            _distributedEventBus = distributedEventBus;
        }

        public async Task HandleEventAsync(OrderPlacedEto eventData)
        {
            _logger.LogInformation($"[Payment Module] OrderPlacedEto event received: OrderId: {eventData.Id}, CustomerName: {eventData.CustomerName}, ProductId: {eventData.ProductId}");
            _logger.LogInformation($"[Payment Module] Payment processing completed for OrderId: {eventData.Id}");

            var payment = await _paymentRecordRepository.InsertAsync(new PaymentRecord
            {
                Method = "CreditCard",
                OrderId = eventData.Id,
                Amount = 100
            });

            await _distributedEventBus.PublishAsync(new PaymentCompletedEto
            {
                Id = payment.Id,
                Method = payment.Method,
                Amount = payment.Amount,
                OrderId = eventData.Id,
            });
        }
    }
}
