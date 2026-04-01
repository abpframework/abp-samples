using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp;

namespace QuickBills.Invoicing;

/// <summary>
/// Represents a line item in an invoice.
/// </summary>
public class InvoiceItem : Entity<Guid>
{
    /// <summary>
    /// Gets or sets the invoice ID this item belongs to.
    /// </summary>
    public Guid InvoiceId { get; set; }

    /// <summary>
    /// Gets or sets the description of the item (e.g., product name, service description).
    /// </summary>
    public string Description { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the quantity of the item.
    /// </summary>
    public decimal Quantity { get; set; }

    /// <summary>
    /// Gets or sets the unit price of the item.
    /// </summary>
    public decimal UnitPrice { get; set; }

    /// <summary>
    /// Gets the line total (Quantity * UnitPrice) for this item.
    /// </summary>
    public decimal LineTotal => Quantity * UnitPrice;

    /// <summary>
    /// Initializes a new instance of the <see cref="InvoiceItem"/> class.
    /// </summary>
    public InvoiceItem() { }

    /// <summary>
    /// Initializes a new instance of the <see cref="InvoiceItem"/> class with required fields.
    /// </summary>
    /// <exception cref="BusinessException">Thrown when input validation fails.</exception>
    public InvoiceItem(Guid id, Guid invoiceId, string description, decimal quantity, decimal unitPrice) : this()
    {
        Check.NotNull(id, nameof(id));
        Check.NotNull(invoiceId, nameof(invoiceId));
        Check.NotNullOrWhiteSpace(description, nameof(description), maxLength: 500);
        
        if (quantity <= 0)
        {
            throw new BusinessException("InvalidQuantity", "Quantity must be greater than zero.");
        }
        
        if (unitPrice < 0)
        {
            throw new BusinessException("InvalidUnitPrice", "Unit price cannot be negative.");
        }
        
        Id = id;
        InvoiceId = invoiceId;
        Description = description;
        Quantity = quantity;
        UnitPrice = unitPrice;
    }
}
