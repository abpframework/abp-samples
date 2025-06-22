using System;
using ModularCrm.Ordering;

namespace ModularCrm.Orders;

public class OrderReportDto
{
    // Order data
    public Guid OrderId { get; set; }
    public string CustomerName { get; set; } = null!;
    public OrderState State { get; set; }

    // Product data
    public Guid ProductId { get; set; }
    public string ProductName { get; set; } = null!;
}