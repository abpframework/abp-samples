using System;

namespace ModularCrm.Ordering.Events;

public class OrderPlacedEto
{
    public string CustomerName { get; set; }
    public Guid ProductId { get; set; }
}
