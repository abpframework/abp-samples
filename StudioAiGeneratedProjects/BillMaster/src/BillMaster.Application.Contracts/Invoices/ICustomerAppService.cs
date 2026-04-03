using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace BillMaster.Invoices;

public interface ICustomerAppService :
    ICrudAppService<
        CustomerDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateCustomerDto>
{
}
