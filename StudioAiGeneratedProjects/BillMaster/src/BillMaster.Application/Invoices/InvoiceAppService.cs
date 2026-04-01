using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using BillMaster.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace BillMaster.Invoices;

[Authorize(BillMasterPermissions.Invoice.Default)]
public class InvoiceAppService : ApplicationService, IInvoiceAppService
{
    private readonly IRepository<Invoice, Guid> _repository;
    private readonly IRepository<Customer, Guid> _customerRepository;

    public InvoiceAppService(IRepository<Invoice, Guid> repository, IRepository<Customer, Guid> customerRepository)
    {
        _repository = repository;
        _customerRepository = customerRepository;
    }

    public async Task<InvoiceDto> GetAsync(Guid id)
    {
        var queryable = await _repository.WithDetailsAsync(x => x.Customer);
        var invoice = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == id);
        if (invoice == null)
        {
            throw new EntityNotFoundException(typeof(Invoice), id);
        }
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
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

        return new PagedResultDto<InvoiceDto>(
            totalCount,
            ObjectMapper.Map<List<Invoice>, List<InvoiceDto>>(invoices)
        );
    }

    [Authorize(BillMasterPermissions.Invoice.Create)]
    public async Task<InvoiceDto> CreateAsync(CreateUpdateInvoiceDto input)
    {
        // Validate that the customer exists
        var customer = await _customerRepository.GetAsync(input.CustomerId);
        if (customer == null)
        {
            throw new EntityNotFoundException(typeof(Customer), input.CustomerId);
        }
        
        var invoice = ObjectMapper.Map<CreateUpdateInvoiceDto, Invoice>(input);
        await _repository.InsertAsync(invoice);
        
        // Manually attach the customer to the invoice for mapping
        // (The ORM has already inserted it, no need to reload from DB)
        invoice.Customer = customer;
        
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
    }

    [Authorize(BillMasterPermissions.Invoice.Edit)]
    public async Task<InvoiceDto> UpdateAsync(Guid id, CreateUpdateInvoiceDto input)
    {
        // Validate that the customer exists if CustomerId changed
        var customer = await _customerRepository.GetAsync(input.CustomerId);
        if (customer == null)
        {
            throw new EntityNotFoundException(typeof(Customer), input.CustomerId);
        }
        
        var queryable = await _repository.WithDetailsAsync(x => x.Customer);
        var invoice = await AsyncExecuter.FirstOrDefaultAsync(queryable, x => x.Id == id);
        
        if (invoice == null)
        {
            throw new EntityNotFoundException(typeof(Invoice), id);
        }
        
        ObjectMapper.Map(input, invoice);
        await _repository.UpdateAsync(invoice);
        
        // Ensure customer is attached for mapping
        invoice.Customer = customer;
        
        return ObjectMapper.Map<Invoice, InvoiceDto>(invoice);
    }

    [Authorize(BillMasterPermissions.Invoice.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
