using JetBrains.Annotations;
using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    public class PaymentRequestProduct : Entity<Guid>
    {
        public Guid PaymentRequestId { get; private set; }
        public string ReferenceId { get; private set; }
        public string Code { get; private set; }
        public string Name { get; private set; }
        public decimal UnitPrice { get; private set; }
        public int Quantity { get; private set; }
        public decimal TotalPrice { get; private set; }

        public PaymentRequestProduct(
            Guid id,
            Guid paymentRequestId,
            [NotNull] string code,
            [NotNull] string name,
            decimal unitPrice,
            int quantity,
            decimal totalPrice,
            [CanBeNull] string referenceId = null) : base(id)
        {
            PaymentRequestId = paymentRequestId;
            Code = Check.NotNullOrEmpty(code, nameof(code), maxLength: PaymentRequestConsts.MaxCodeLength);
            Name = Check.NotNullOrEmpty(name, nameof(name), maxLength: PaymentRequestConsts.MaxNameLength);
            UnitPrice = unitPrice;
            Quantity = quantity;
            TotalPrice = totalPrice;
            ReferenceId = referenceId;
        }
    }
}