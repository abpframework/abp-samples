using EShopOnAbp.OrderingService.Orders;
using EShopOnAbp.PaymentService.PaymentRequests;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace EShopOnAbp.OrderingService.PaymentRequests
{
    public class PaymentRequestEventHandler : IDistributedEventHandler<PaymentRequestCompletedEto>,
        ITransientDependency
    {
        private readonly IDistributedEventBus _eventBus;
        private readonly OrderManager _orderManager;

        public PaymentRequestEventHandler(IDistributedEventBus eventBus, OrderManager orderManager)
        {
            _eventBus = eventBus;
            _orderManager = orderManager;
        }

        public async Task HandleEventAsync(PaymentRequestCompletedEto eventData)
        {
            if (!Guid.TryParse(eventData.OrderId, out var orderId))
            {
                throw new BusinessException(OrderingServiceErrorCodes.OrderIdIdNotGuid);
            }

            var acceptedOrder = await _orderManager.AcceptOrderAsync(
                orderId, eventData.PaymentRequestId, eventData.State.ToString()
            );

            await _eventBus.PublishAsync(new OrderAcceptedEto
            {
                Items = eventData.Products.Select(MapProductToOrderItem).ToList(),
                PaymentStatus = acceptedOrder.PaymentStatus,
                Buyer = new BuyerEto
                {
                    BuyerId = acceptedOrder.Buyer.Id,
                    BuyerEmail = acceptedOrder.Buyer.Email,
                    BuyerName = acceptedOrder.Buyer.Name
                },
                OrderId = acceptedOrder.Id
            });
        }

        private static OrderItemEto MapProductToOrderItem(PaymentRequestProductEto arg)
        {
            return new OrderItemEto
            {
                Units = arg.Quantity,
                ProductId = Guid.Parse(arg.ReferenceId)
            };
        }
    }
}