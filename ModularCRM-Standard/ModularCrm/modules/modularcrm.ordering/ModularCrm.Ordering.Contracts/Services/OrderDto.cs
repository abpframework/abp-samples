using System;
using ModularCrm.Ordering.Enums;

namespace ModularCrm.Ordering.Services;

public class OrderDto
{
    public Guid Id { get; set; }
    public string CustomerName { get; set; } = null!;
    public Guid ProductId { get; set; }
    public OrderState State { get; set; }
    public string ProductName { get; set; } = null!; //NEW PROPERTY
}