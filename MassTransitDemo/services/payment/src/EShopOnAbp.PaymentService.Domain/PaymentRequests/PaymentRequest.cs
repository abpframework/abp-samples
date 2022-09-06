using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    public class PaymentRequest : CreationAuditedAggregateRoot<Guid>, ISoftDelete
    {
        [NotNull] public string Currency { get; protected set; }
        [NotNull] public string OrderId { get; protected set; }
        public int OrderNo { get; protected set; }
        [CanBeNull] public string BuyerId { get; protected set; }
        public PaymentRequestState State { get; protected set; }
        [CanBeNull] public string FailReason { get; protected set; }
        public bool IsDeleted { get; set; }
        public ICollection<PaymentRequestProduct> Products { get; } = new List<PaymentRequestProduct>();
        private PaymentRequest()
        {
        }

        public PaymentRequest(Guid id,
            [NotNull] string orderId,
            int orderNo,
            [NotNull] string currency,
            [CanBeNull] string buyerId = null) : base(id)
        {
            OrderId = Check.NotNullOrWhiteSpace(orderId, nameof(orderId), minLength: PaymentRequestConsts.MinOrderIdLength, maxLength: PaymentRequestConsts.MaxOrderIdLength);
            Currency = Check.NotNullOrWhiteSpace(currency, nameof(currency), maxLength: PaymentRequestConsts.MaxCurrencyLength);
            BuyerId = buyerId;
            OrderNo = orderNo;
        }

        public virtual void SetAsCompleted()
        {
            if (State == PaymentRequestState.Completed)
            {
                return;
            }

            State = PaymentRequestState.Completed;
            FailReason = null;

            AddDistributedEvent(new PaymentRequestCompletedEto
            {
                PaymentRequestId = Id,
                OrderId = OrderId,
                OrderNo = OrderNo,
                BuyerId = BuyerId,
                Currency = Currency,
                State = State,
                Products = Products.Select(MapProductToEto).ToList(),
                ExtraProperties = ExtraProperties
            });
        }

        public virtual void SetAsFailed(string failReason)
        {
            if (State != PaymentRequestState.Failed)
            {
                return;
            }

            State = PaymentRequestState.Failed;
            FailReason = failReason;

            AddDistributedEvent(new PaymentRequestFailedEto
            {
                PaymentRequestId = Id,
                OrderId = OrderId,
                OrderNo = OrderNo,
                FailReason = failReason,
                ExtraProperties = ExtraProperties
            });
        }

        private static PaymentRequestProductEto MapProductToEto(PaymentRequestProduct product)
        {
            return new PaymentRequestProductEto
            {
                Code = product.Code,
                Name = product.Name,
                Quantity = product.Quantity,
                ReferenceId = product.ReferenceId,
                TotalPrice = product.TotalPrice,
                UnitPrice = product.UnitPrice,
            };
        }
    }
}