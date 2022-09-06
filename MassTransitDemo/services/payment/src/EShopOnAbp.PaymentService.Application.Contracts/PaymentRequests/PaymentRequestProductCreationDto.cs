using System;
using System.ComponentModel.DataAnnotations;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    [Serializable]
    public class PaymentRequestProductCreationDto
    {
        public string ReferenceId { get; set; }

        [Required]
        [MaxLength(PaymentRequestConsts.MaxCodeLength)]
        public string Code { get; set; }

        [Required]
        [MaxLength(PaymentRequestConsts.MaxNameLength)]
        public string Name { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
    }
}