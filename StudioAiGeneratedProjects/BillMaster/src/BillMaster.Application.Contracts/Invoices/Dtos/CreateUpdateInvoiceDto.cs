using System;
using System.ComponentModel.DataAnnotations;
using BillMaster.Validations;

namespace BillMaster.Invoices;

public class CreateUpdateInvoiceDto
{
    [Required]
    [StringLength(50)]
    public string Number { get; set; } = string.Empty;

    [Required]
    [DataType(DataType.Date)]
    public DateTime InvoiceDate { get; set; } = DateTime.UtcNow;

    [Required]
    public InvoiceStatus Status { get; set; } = InvoiceStatus.Draft;

    [StringLength(500)]
    public string? Notes { get; set; }

    [Required]
    [GuidNotEmpty]
    public Guid CustomerId { get; set; }
}
