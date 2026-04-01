using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace BillMaster.Invoices;

public class Invoice : AuditedAggregateRoot<Guid>
{
    public string Number { get; set; }

    public DateTime InvoiceDate { get; set; }

    public InvoiceStatus Status { get; set; }

    public string? Notes { get; set; }

    public Guid CustomerId { get; set; }

    public Customer Customer { get; set; }

    public ICollection<InvoiceItem> Items { get; set; } = new List<InvoiceItem>();

    public decimal GetTotalAmount()
    {
        decimal total = 0;
        foreach (var item in Items)
        {
            total += item.Quantity * item.UnitPrice;
        }
        return total;
    }
}
