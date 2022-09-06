using EShopOnAbp.PaymentService.PaymentRequests;
using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace EShopOnAbp.OrderingService.Orders;

public class Order : AggregateRoot<Guid>
{
    public DateTime OrderDate { get; private set; }
    public int OrderNo { get; private set; }
    public string PaymentMethod { get; private set; }
    public Guid? PaymentRequestId { get; private set; }
    public string PaymentStatus { get; private set; }
    public Buyer Buyer { get; private set; }
    public Address Address { get; private set; }
    public OrderStatus OrderStatus { get; private set; }
    public List<OrderItem> OrderItems { get; private set; }

    private Order()
    {
    }

    internal Order(Guid id, Buyer buyer, Address address, [NotNull] string paymentMethod, Guid? paymentRequestId = null) : base(id)
    {
        OrderDate = DateTime.UtcNow;
        OrderNo = GenerateOrderNo(id);
        Buyer = buyer;
        Address = address;
        PaymentRequestId = paymentRequestId;
        PaymentMethod = Check.NotNullOrEmpty(paymentMethod, nameof(paymentMethod), maxLength: OrderConstants.OrderPaymentMethodNameMaxLength);
        PaymentStatus = PaymentRequestState.Waiting.ToString(); // From PaymentService.Domain.Shared
        OrderItems = new List<OrderItem>();
    }

    private int GenerateOrderNo(Guid id)
    {
        // Simple order no generation. Should be improved for uniqueness.
        var code = Id.GetHashCode();
        if (code < 0) // Should be negative
        {
            code *= -1;
        }

        return code;
    }

    internal Order SetOrderAccepted(Guid paymentRequestId, string paymentRequestStatus)
    {
        PaymentRequestId = paymentRequestId;
        PaymentStatus = paymentRequestStatus;
        OrderStatus = OrderStatus.Paid;

        return this;
    }

    public Order SetOrderCancelled()
    {
        OrderStatus = OrderStatus.Cancelled;
        return this;
    }

    public Order AddOrderItem(Guid id, Guid productId, string productName, string productCode, decimal unitPrice,
        decimal discount, string pictureUrl, int units = 1)
    {
        var existingOrderForProduct = OrderItems.SingleOrDefault(o => o.ProductId == productId);

        if (existingOrderForProduct != null)
        {
            if (discount > existingOrderForProduct.Discount)
            {
                existingOrderForProduct.SetNewDiscount(discount);
            }

            existingOrderForProduct.AddUnits(units);
        }
        else
        {
            var orderItem = new OrderItem(id, productId, productName, productCode, unitPrice, discount, pictureUrl,
                units);
            OrderItems.Add(orderItem);
        }

        return this;
    }

    public decimal GetTotal()
    {
        return OrderItems.Sum(o => o.Units * o.UnitPrice);
    }

    public Order SetOrderAsShipped()
    {
        if (OrderStatus == OrderStatus.Cancelled)
        {
            return this;
        }
        OrderStatus = OrderStatus.Shipped;
        return this;
    }
}