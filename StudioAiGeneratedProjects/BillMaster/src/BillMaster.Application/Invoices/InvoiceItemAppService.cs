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

[Authorize(BillMasterPermissions.InvoiceItems.Default)]
public class InvoiceItemAppService : ApplicationService, IInvoiceItemAppService
{
    private readonly IRepository<InvoiceItem, Guid> _repository;

    public InvoiceItemAppService(IRepository<InvoiceItem, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<InvoiceItemDto> GetAsync(Guid id)
    {
        var item = await _repository.GetAsync(id);
        return ObjectMapper.Map<InvoiceItem, InvoiceItemDto>(item);
    }

    public async Task<PagedResultDto<InvoiceItemDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Description" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var items = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<InvoiceItemDto>(
            totalCount,
            ObjectMapper.Map<List<InvoiceItem>, List<InvoiceItemDto>>(items)
        );
    }

    [Authorize(BillMasterPermissions.InvoiceItems.Create)]
    public async Task<InvoiceItemDto> CreateAsync(CreateUpdateInvoiceItemDto input)
    {
        var item = ObjectMapper.Map<CreateUpdateInvoiceItemDto, InvoiceItem>(input);
        await _repository.InsertAsync(item);
        return ObjectMapper.Map<InvoiceItem, InvoiceItemDto>(item);
    }

    [Authorize(BillMasterPermissions.InvoiceItems.Edit)]
    public async Task<InvoiceItemDto> UpdateAsync(Guid id, CreateUpdateInvoiceItemDto input)
    {
        var item = await _repository.GetAsync(id);
        ObjectMapper.Map(input, item);
        await _repository.UpdateAsync(item);
        return ObjectMapper.Map<InvoiceItem, InvoiceItemDto>(item);
    }

    [Authorize(BillMasterPermissions.InvoiceItems.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
