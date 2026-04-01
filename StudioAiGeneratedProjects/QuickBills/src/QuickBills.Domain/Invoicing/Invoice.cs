using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp;

namespace QuickBills.Invoicing;

/// <summary>
/// Represents an invoice issued to a customer.
/// </summary>
public class Invoice : AuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Gets or sets the customer ID this invoice belongs to.
    /// </summary>
    public Guid CustomerId { get; set; }

    /// <summary>
    /// Gets or sets the customer reference (for navigation properties).
    /// </summary>
    public Customer? Customer { get; set; }

    /// <summary>
    /// Gets or sets the unique invoice number (e.g., INV-001).
    /// </summary>
    public string InvoiceNumber { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the invoice issue date.
    /// </summary>
    public DateTime IssuedDate { get; set; }

    /// <summary>
    /// Gets or sets the invoice due date.
    /// </summary>
    public DateTime DueDate { get; set; }

    /// <summary>
    /// Gets or sets the status of the invoice (Draft, Sent, Paid, Cancelled).
    /// </summary>
    public InvoiceStatus Status { get; set; } = InvoiceStatus.Draft;

    /// <summary>
    /// Gets or sets optional notes or payment terms for the invoice.
    /// </summary>
    public string? Notes { get; set; }

    /// <summary>
    /// Collection of line items in this invoice.
    /// </summary>
    public ICollection<InvoiceItem> Items { get; set; } = [];

    /// <summary>
    /// Initializes a new instance of the <see cref="Invoice"/> class.
    /// </summary>
    public Invoice() { }

    /// <summary>
    /// Initializes a new instance of the <see cref="Invoice"/> class with required fields.
    /// </summary>
    public Invoice(Guid id, Guid customerId, string invoiceNumber, DateTime issuedDate, DateTime dueDate) : this()
    {
        Id = id;
        CustomerId = customerId;
        InvoiceNumber = invoiceNumber;
        IssuedDate = issuedDate;
        DueDate = dueDate;
    }

    /// <summary>
    /// Adds an item to the invoice.
    /// </summary>
    /// <exception cref="BusinessException">Thrown when invoice ID is empty or item data is invalid.</exception>
    public void AddItem(string description, decimal quantity, decimal unitPrice)
    {
        if (Id == Guid.Empty)
        {
            throw new BusinessException("InvoiceNotInitialized", "Invoice must be saved before adding items.");
        }
        
        Check.NotNullOrWhiteSpace(description, nameof(description), maxLength: 500);
        
        if (quantity <= 0)
        {
            throw new BusinessException("InvalidQuantity", "Quantity must be greater than zero.");
        }
        
        if (unitPrice < 0)
        {
            throw new BusinessException("InvalidUnitPrice", "Unit price cannot be negative.");
        }
        
        var item = new InvoiceItem(Guid.NewGuid(), Id, description, quantity, unitPrice);
        Items.Add(item);
    }

    /// <summary>
    /// Removes an item from the invoice by ID.
    /// </summary>
    public void RemoveItem(Guid itemId)
    {
        var item = Items.FirstOrDefault(i => i.Id == itemId);
        if (item != null)
        {
            Items.Remove(item);
        }
    }

    /// <summary>
    /// Calculates the total amount of the invoice (sum of all item line totals).
    /// </summary>
    public decimal CalculateTotal()
    {
        return Items.Sum(item => item.LineTotal);
    }

    /// <summary>
    /// Changes the invoice status with validation of allowed transitions.
    /// </summary>
    /// <exception cref="BusinessException">Thrown when the status transition is invalid.</exception>
    public void ChangeStatus(InvoiceStatus newStatus)
    {
        // Define allowed status transitions
        var allowedTransitions = new Dictionary<InvoiceStatus, HashSet<InvoiceStatus>>
        {
            { InvoiceStatus.Draft, new HashSet<InvoiceStatus> { InvoiceStatus.Sent, InvoiceStatus.Cancelled } },
            { InvoiceStatus.Sent, new HashSet<InvoiceStatus> { InvoiceStatus.Paid, InvoiceStatus.Cancelled } },
            { InvoiceStatus.Paid, new HashSet<InvoiceStatus> { } },
            { InvoiceStatus.Cancelled, new HashSet<InvoiceStatus> { } }
        };
        
        if (!allowedTransitions.TryGetValue(Status, out var allowed) || !allowed.Contains(newStatus))
        {
            throw new BusinessException(
                "InvalidStatusTransition",
                $"Cannot transition invoice status from {Status} to {newStatus}."
            );
        }
        
        Status = newStatus;
    }
}
