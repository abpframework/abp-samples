using System;
using Volo.Abp.Application.Dtos;

namespace BillMaster.Invoices;

public class InvoiceItemDto : AuditedEntityDto<Guid>
{
    public string Description { get; set; }

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public Guid InvoiceId { get; set; }

    public decimal LineTotal { get; set; }
}
