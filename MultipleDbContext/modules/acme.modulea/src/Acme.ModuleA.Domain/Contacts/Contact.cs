using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace Acme.ModuleA.Contacts;

public class Contact : AuditedAggregateRoot<Guid>
{
    public string Code { get; protected set; } = null!;

    protected Contact() {}

    public Contact(string code)
    {
        SetCode(code);
    }

    public void SetCode(string code)
    {
        Check.NotNullOrEmpty(code, nameof(code), maxLength: ContactConsts.MaxCodeLength, minLength: 1);
        Code = code;
    }
}