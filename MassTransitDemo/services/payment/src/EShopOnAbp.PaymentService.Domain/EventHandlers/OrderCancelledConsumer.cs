using EShopOnAbp.OrderingService.Orders;
using EShopOnAbp.PaymentService.PaymentRequests;
using MassTransit;
using Serilog;
using System.Threading.Tasks;

namespace EShopOnAbp.PaymentService.EventHandlers
{
    public class OrderCancelledConsumer : IConsumer<OrderCancelledEto>
    {
        private readonly IPaymentRequestRepository _paymentRepository;
        public OrderCancelledConsumer(IPaymentRequestRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }
        public async Task Consume(ConsumeContext<OrderCancelledEto> context)
        {
            var payment = await _paymentRepository.GetAsync(context.Message.PaymentRequestId);
            Log.Information($"Cancelled the order: {payment.OrderId} payment:{payment.Id}");
        }
    }
}
