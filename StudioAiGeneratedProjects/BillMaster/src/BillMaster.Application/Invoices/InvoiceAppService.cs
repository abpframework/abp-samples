using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using BillMaster.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace BillMaster.Invoices;

[Authorize(BillMasterPermissions.Invoice.Default)]
public class InvoiceAppService : ApplicationService, IInvoiceAppService
{
    private readonly IRepository<Invoice, Guid> _repository;

    public InvoiceAppService(IRepository<Invoice, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<InvoiceDto> GetAsync(Guid id)
    {
        var invoice = await _repository.GetAsync(id);
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
    }

    public async Task<PagedResultDto<InvoiceDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Number" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var invoices = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<InvoiceDto>(
            totalCount,
            ObjectMapper.Map<List<Invoice>, List<InvoiceDto>>(invoices)
        );
    }

    [Authorize(BillMasterPermissions.Invoice.Create)]
    public async Task<InvoiceDto> CreateAsync(CreateUpdateInvoiceDto input)
    {
        var invoice = ObjectMapper.Map<CreateUpdateInvoiceDto, Invoice>(input);
        await _repository.InsertAsync(invoice);
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
    }

    [Authorize(BillMasterPermissions.Invoice.Edit)]
    public async Task<InvoiceDto> UpdateAsync(Guid id, CreateUpdateInvoiceDto input)
    {
        var invoice = await _repository.GetAsync(id);
        ObjectMapper.Map(input, invoice);
        await _repository.UpdateAsync(invoice);
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
    }

    [Authorize(BillMasterPermissions.Invoice.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
