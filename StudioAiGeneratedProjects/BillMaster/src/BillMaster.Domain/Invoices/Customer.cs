using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace BillMaster.Invoices;

public class Customer : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }

    public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();
}
