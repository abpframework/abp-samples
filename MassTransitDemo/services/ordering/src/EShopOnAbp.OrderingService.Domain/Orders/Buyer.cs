using System;
using System.Collections.Generic;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace EShopOnAbp.OrderingService.Orders;

public class Buyer : ValueObject
{
    public Guid? Id { get; private set; }
    public string Name { get; private set; }
    public string Email { get; private set; }

    private Buyer()
    {
    }

    public Buyer(string email, [CanBeNull] string name, Guid? id)
    {
        Email = Check.NotNullOrEmpty(email, nameof(email));
        Name = name;
        Id = id;
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        yield return Id;
        yield return Name;
        yield return Email;
    }
}