using System;
using Volo.Abp.Application.Dtos;

namespace BillMaster.Invoices;

public class InvoiceDto : AuditedEntityDto<Guid>
{
    public string Number { get; set; }

    public DateTime InvoiceDate { get; set; }

    public InvoiceStatus Status { get; set; }

    public string Notes { get; set; }

    public Guid CustomerId { get; set; }

    public CustomerDto Customer { get; set; }

    public decimal TotalAmount { get; set; }
}
