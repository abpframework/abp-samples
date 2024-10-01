using System;
using ModularCrm.Ordering.Contracts.Enums;

namespace ModularCrm.Ordering.Contracts.Services;

public class OrderDto
{
    public Guid Id { get; set; }
    public string CustomerName { get; set; }
    public Guid ProductId { get; set; }
    public string ProductName { get; set; }
    public OrderState State { get; set; }
}