using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EventBus;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    [EventName("EShopOnAbp.Payment.Completed")]
    public class PaymentCompletedEto : EtoBase
    {
        public PaymentRequestDto PaymentRequest { get; set; }
    }
}
