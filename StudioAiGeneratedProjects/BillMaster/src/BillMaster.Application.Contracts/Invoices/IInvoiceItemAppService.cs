using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace BillMaster.Invoices;

public interface IInvoiceItemAppService :
    ICrudAppService<
        InvoiceItemDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateInvoiceItemDto>
{
}
