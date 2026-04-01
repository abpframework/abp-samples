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
    private readonly IRepository<InvoiceItem, Guid> _itemRepository;

    public InvoiceAppService(
        IRepository<Invoice, Guid> repository,
        IRepository<InvoiceItem, Guid> itemRepository)
    {
        _repository = repository;
        _itemRepository = itemRepository;
    }

    public async Task<InvoiceDto> GetAsync(Guid id)
    {
        var queryable = await _repository.WithDetailsAsync(x => x.Customer, x => x.Items);
        var invoice = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == id);

        if (invoice == null)
        {
            throw new ArgumentException($"Invoice with id {id} not found");
        }

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
        dto.TotalAmount = invoice.GetTotalAmount();
        return dto;
    }

    public async Task<PagedResultDto<InvoiceDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _repository.WithDetailsAsync(x => x.Customer);
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Number" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var invoices = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var dtos = ObjectMapper.Map<List<Invoice>, List<InvoiceDto>>(invoices);
        
        // Calculate totals for each invoice
        foreach (var invoice in invoices)
        {
            var dto = dtos.FirstOrDefault(x => x.Id == invoice.Id);
            if (dto != null)
            {
                dto.TotalAmount = invoice.GetTotalAmount();
            }
        }

        return new PagedResultDto<InvoiceDto>(totalCount, dtos);
    }

    [Authorize(BillMasterPermissions.Invoice.Create)]
    public async Task<InvoiceDto> CreateAsync(CreateUpdateInvoiceDto input)
    {
        var invoice = ObjectMapper.Map<CreateUpdateInvoiceDto, Invoice>(input);
        await _repository.InsertAsync(invoice);
        
        // Reload with customer and items
        var queryable = await _repository.WithDetailsAsync(x => x.Customer, x => x.Items);
        var reloaded = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == invoice.Id);

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(reloaded);
        dto.TotalAmount = reloaded.GetTotalAmount();
        return dto;
    }

    [Authorize(BillMasterPermissions.Invoice.Edit)]
    public async Task<InvoiceDto> UpdateAsync(Guid id, CreateUpdateInvoiceDto input)
    {
        var invoice = await _repository.GetAsync(id);
        ObjectMapper.Map(input, invoice);
        await _repository.UpdateAsync(invoice);

        // Reload with customer and items
        var queryable = await _repository.WithDetailsAsync(x => x.Customer, x => x.Items);
        var reloaded = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == id);

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(reloaded);
        dto.TotalAmount = reloaded.GetTotalAmount();
        return dto;
    }

    [Authorize(BillMasterPermissions.Invoice.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }

    /// <summary>
    /// Get an invoice with its customer and all line items
    /// </summary>
    public async Task<InvoiceDto> GetWithItemsAsync(Guid invoiceId)
    {
        var queryable = await _repository.WithDetailsAsync(x => x.Customer, x => x.Items);
        var invoice = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == invoiceId);

        if (invoice == null)
        {
            throw new ArgumentException($"Invoice with id {invoiceId} not found");
        }

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
        dto.TotalAmount = invoice.GetTotalAmount();
        return dto;
    }

    /// <summary>
    /// Get all items for a specific invoice
    /// </summary>
    public async Task<List<InvoiceItemDto>> GetInvoiceItemsAsync(Guid invoiceId)
    {
        var queryable = await _itemRepository.GetQueryableAsync();
        var items = await AsyncExecuter.ToListAsync(queryable.Where(x => x.InvoiceId == invoiceId));

        var dtos = ObjectMapper.Map<List<InvoiceItem>, List<InvoiceItemDto>>(items);
        
        // Calculate line totals
        foreach (var item in items)
        {
            var dto = dtos.FirstOrDefault(x => x.Id == item.Id);
            if (dto != null)
            {
                dto.LineTotal = item.GetLineTotal();
            }
        }

        return dtos;
    }
}
