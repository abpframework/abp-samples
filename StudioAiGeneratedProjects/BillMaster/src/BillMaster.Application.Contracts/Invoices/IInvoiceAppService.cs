using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace BillMaster.Invoices;

public interface IInvoiceAppService :
    ICrudAppService<
        InvoiceDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateInvoiceDto>
{
}
