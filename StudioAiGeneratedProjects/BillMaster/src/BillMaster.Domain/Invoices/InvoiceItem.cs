using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace BillMaster.Invoices;

public class InvoiceItem : AuditedEntity<Guid>
{
    public string Description { get; set; }

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public Guid InvoiceId { get; set; }

    public Invoice Invoice { get; set; }
}
