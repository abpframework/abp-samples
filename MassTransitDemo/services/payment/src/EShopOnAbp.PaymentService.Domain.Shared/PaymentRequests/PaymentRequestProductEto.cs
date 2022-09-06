using System;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    [Serializable]
    public class PaymentRequestProductEto
    {
        public string ReferenceId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
    }
}