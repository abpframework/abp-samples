using QuickBills.Invoicing;
using Volo.Abp.Application.Dtos;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for reading an invoice.
/// </summary>
public class InvoiceDto : AuditedEntityDto<Guid>
{
    public Guid CustomerId { get; set; }
    public string InvoiceNumber { get; set; } = string.Empty;
    public DateTime IssuedDate { get; set; }
    public DateTime DueDate { get; set; }
    public InvoiceStatus Status { get; set; }
    public string? Notes { get; set; }
    public decimal Total { get; set; }

    // For loading related customer name
    public string? CustomerName { get; set; }
}
