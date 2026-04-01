using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp;

namespace BillMaster.Invoices;

public class InvoiceItem : AuditedEntity<Guid>
{
    public string Description { get; private set; }

    public int Quantity { get; private set; }

    public decimal UnitPrice { get; private set; }

    public Guid InvoiceId { get; private set; }

    public Invoice Invoice { get; set; }

    /// <summary>
    /// EF Core constructor for deserialization.
    /// </summary>
    protected InvoiceItem()
    {
    }

    /// <summary>
    /// Creates a new invoice item with validation.
    /// </summary>
    /// <param name="description">Item description</param>
    /// <param name="quantity">Item quantity (must be greater than 0)</param>
    /// <param name="unitPrice">Unit price (must be non-negative)</param>
    /// <param name="invoiceId">Associated invoice ID (can be set later via SetInvoiceId)</param>
    public InvoiceItem(string description, int quantity, decimal unitPrice, Guid invoiceId = default)
    {
        Check.NotNullOrWhiteSpace(description, nameof(description));
        if (quantity <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity), quantity, "Quantity must be greater than 0.");
        }
        if (unitPrice < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(unitPrice), unitPrice, "UnitPrice must be non-negative.");
        }

        Description = description;
        Quantity = quantity;
        UnitPrice = unitPrice;
        InvoiceId = invoiceId;
    }

    /// <summary>
    /// Sets the invoice ID for this item (used when creating items through DTO).
    /// </summary>
    public void SetInvoiceId(Guid invoiceId)
    {
        if (invoiceId == Guid.Empty)
        {
            throw new ArgumentException("InvoiceId cannot be empty.", nameof(invoiceId));
        }
        InvoiceId = invoiceId;
    }

    /// <summary>
    /// Updates invoice item with validation.
    /// </summary>
    public void Update(string description, int quantity, decimal unitPrice)
    {
        Check.NotNullOrWhiteSpace(description, nameof(description));
        if (quantity <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity), quantity, "Quantity must be greater than 0.");
        }
        if (unitPrice < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(unitPrice), unitPrice, "UnitPrice must be non-negative.");
        }

        Description = description;
        Quantity = quantity;
        UnitPrice = unitPrice;
    }

    /// <summary>
    /// Calculated property: line total (Quantity × UnitPrice)
    /// </summary>
    public decimal GetLineTotal()
    {
        return Quantity * UnitPrice;
    }
}
