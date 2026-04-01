using QuickBills.Invoicing;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for creating or updating an invoice.
/// </summary>
public class CreateUpdateInvoiceDto
{
    public Guid CustomerId { get; set; }
    public string InvoiceNumber { get; set; } = string.Empty;
    public DateTime IssuedDate { get; set; }
    public DateTime DueDate { get; set; }
    public InvoiceStatus Status { get; set; } = InvoiceStatus.Draft;
    public string? Notes { get; set; }
}
