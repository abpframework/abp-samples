using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.DemoCenterApp.Customers;

public class Customer : AuditedAggregateRoot<Guid>
{
    public string Code { get; protected set; } = null!;

    protected Customer() {}

    public Customer(string code)
    {
        SetCode(code);
    }

    public void SetCode(string code)
    {
        Check.NotNullOrEmpty(code, nameof(code), maxLength: CustomerConsts.MaxCodeLength, minLength: 1);
        Code = code;
    }
}