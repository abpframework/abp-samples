using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderItem : Entity<Guid>
{
    public string ProductCode { get; private set; }
    public string ProductName { get; private set; }
    public string PictureUrl { get; private set; }
    public decimal UnitPrice { get; private set; }
    public decimal Discount { get; private set; }
    public int Units { get; private set; }
    public Guid ProductId { get; private set; }

    protected OrderItem() { }

    public OrderItem(Guid id, Guid productId, [NotNull]string productName, [NotNull]string productCode, decimal unitPrice, decimal discount, [CanBeNull]string pictureUrl, int units = 1)
    : base(id)
    {
        if (units <= 0)
        {
            throw new BusinessException(OrderingServiceErrorCodes.InvalidUnits);
        }

        if ((unitPrice * units) < discount)
        {
            throw new BusinessException(OrderingServiceErrorCodes.InvalidTotalForDiscount);
        }

        ProductId = productId;
        ProductName = Check.NotNullOrEmpty(productName, nameof(productName));
        ProductCode = Check.NotNullOrEmpty(productCode, nameof(productCode));
        UnitPrice = unitPrice;
        Discount = discount;
        Units = units;
        PictureUrl = pictureUrl;
    }

    public void SetNewDiscount(decimal discount)
    {
        if (discount < 0)
        {
            throw new BusinessException(OrderingServiceErrorCodes.InvalidDiscount);
        }

        Discount = discount;
    }

    public void AddUnits(int units)
    {
        if (units < 0)
        {
            throw new BusinessException(OrderingServiceErrorCodes.InvalidUnits);
        }

        Units += units;
    }
}