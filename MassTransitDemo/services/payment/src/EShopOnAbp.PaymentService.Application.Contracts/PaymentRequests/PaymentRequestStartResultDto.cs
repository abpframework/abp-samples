using System;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    [Serializable]
    public class PaymentRequestStartResultDto
    {
        public string CheckoutLink { get; set; }
    }
}