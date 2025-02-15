using System;

namespace ModularCrm.Payment.Services;

public class PaymentRecordDto
{
    public Guid Id { get; set; }

    public string Method { get; set; }

    public decimal Amount { get; set; }

    public Guid OrderId { get; set; }
}
