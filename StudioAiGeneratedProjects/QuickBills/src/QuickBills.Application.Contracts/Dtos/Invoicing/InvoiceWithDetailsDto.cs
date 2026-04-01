using System.Collections.Generic;
using QuickBills.Invoicing;
using Volo.Abp.Application.Dtos;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for reading an invoice with its items.
/// </summary>
public class InvoiceWithDetailsDto : AuditedEntityDto<Guid>
{
    public Guid CustomerId { get; set; }
    public string InvoiceNumber { get; set; } = string.Empty;
    public DateTime IssuedDate { get; set; }
    public DateTime DueDate { get; set; }
    public InvoiceStatus Status { get; set; }
    public string? Notes { get; set; }
    public decimal Total { get; set; }
    public string? CustomerName { get; set; }
    public List<InvoiceItemDto> Items { get; set; } = [];
}
