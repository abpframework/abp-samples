using System;
using ModularCrm.Ordering;

namespace NG.ModularCRM.Services.Dtos.Orders;

public class OrderReportDto
{
    public Guid OrderId { get; set; }

    public string CustomerName { get; set; } = null!;

    public OrderState State { get; set; }

    public Guid ProductId { get; set; }

    public string ProductName { get; set; } = null!;
}
