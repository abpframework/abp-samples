using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp;

namespace BillMaster.Invoices;

public class Invoice : AuditedAggregateRoot<Guid>
{
    public string Number { get; private set; }

    public DateTime InvoiceDate { get; private set; }

    public InvoiceStatus Status { get; private set; }

    public string? Notes { get; set; }

    public Guid CustomerId { get; private set; }

    public Customer Customer { get; set; }

    public ICollection<InvoiceItem> Items { get; set; } = new List<InvoiceItem>();

    /// <summary>
    /// EF Core constructor for deserialization.
    /// </summary>
    protected Invoice()
    {
    }

    /// <summary>
    /// Creates a new invoice with required fields and validation.
    /// </summary>
    /// <param name="number">Invoice number (unique identifier)</param>
    /// <param name="customerId">Associated customer ID</param>
    /// <param name="invoiceDate">Invoice date</param>
    /// <param name="status">Initial invoice status (default: Draft)</param>
    public Invoice(string number, Guid customerId, DateTime invoiceDate, InvoiceStatus status = InvoiceStatus.Draft)
    {
        Check.NotNullOrWhiteSpace(number, nameof(number));
        if (customerId == Guid.Empty)
        {
            throw new ArgumentException("CustomerId cannot be empty.", nameof(customerId));
        }

        Number = number;
        CustomerId = customerId;
        InvoiceDate = invoiceDate;
        Status = status;
    }

    /// <summary>
    /// Updates invoice with validation.
    /// </summary>
    public void Update(string number, Guid customerId, DateTime invoiceDate, InvoiceStatus status, string? notes = null)
    {
        Check.NotNullOrWhiteSpace(number, nameof(number));
        if (customerId == Guid.Empty)
        {
            throw new ArgumentException("CustomerId cannot be empty.", nameof(customerId));
        }

        Number = number;
        CustomerId = customerId;
        InvoiceDate = invoiceDate;
        Status = status;
        Notes = notes;
    }

    /// <summary>
    /// Calculated property: sum of all line items (Quantity × UnitPrice).
    /// Ensures consistent total calculation based on current items.
    /// </summary>
    public decimal GetTotalAmount()
    {
        // Use LINQ to ensure centralized calculation logic
        return Items.Sum(item => item.GetLineTotal());
    }
}
