using System;
using Volo.Abp.Application.Dtos;

namespace BillMaster.Invoices;

public class CustomerDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }
}
