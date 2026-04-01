using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using QuickBills.Dtos.Invoicing;
using QuickBills.Permissions;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace QuickBills.Invoicing;

/// <summary>
/// Application service for customer management with CRUD operations.
/// </summary>
[Authorize(QuickBillsPermissions.Customers.Default)]
public class CustomerAppService :
    CrudAppService<
        Customer,
        CustomerDto,
        Guid,
        GetCustomerListInput,
        CreateUpdateCustomerDto>,
    ICustomerAppService
{
    private readonly Application.Invoicing.InvoicingMapper _invoicingMapper;

    public CustomerAppService(
        IRepository<Customer, Guid> repository,
        Application.Invoicing.InvoicingMapper invoicingMapper)
        : base(repository)
    {
        _invoicingMapper = invoicingMapper;
    }

    public override async Task<PagedResultDto<CustomerDto>> GetListAsync(GetCustomerListInput input)
    {
        await AuthorizationService.CheckAsync(QuickBillsPermissions.Customers.Default);

        var query = (await Repository.GetQueryableAsync())
            .WhereIf(
                !input.Filter.IsNullOrWhiteSpace(),
                c => c.Name.Contains(input.Filter!) || c.Email.Contains(input.Filter!)
            )
            .OrderBy(c => c.Name);

        var totalCount = await AsyncExecuter.CountAsync(query);
        var items = await AsyncExecuter.ToListAsync(
            query.Skip(input.SkipCount).Take(input.MaxResultCount)
        );

        return new PagedResultDto<CustomerDto>(
            totalCount,
            _invoicingMapper.MapCustomersToDto(items).ToList()
        );
    }

    public override async Task<CustomerDto> GetAsync(Guid id)
    {
        await AuthorizationService.CheckAsync(QuickBillsPermissions.Customers.Default);
        return await base.GetAsync(id);
    }

    [Authorize(QuickBillsPermissions.Customers.Create)]
    public override async Task<CustomerDto> CreateAsync(CreateUpdateCustomerDto input)
    {
        var entity = _invoicingMapper.MapCustomerFromDto(input);
        await Repository.InsertAsync(entity);
        return _invoicingMapper.MapCustomerToDto(entity);
    }

    [Authorize(QuickBillsPermissions.Customers.Edit)]
    public override async Task<CustomerDto> UpdateAsync(Guid id, CreateUpdateCustomerDto input)
    {
        var entity = await Repository.GetAsync(id);
        var updated = _invoicingMapper.MapCustomerFromDto(input);
        entity.Name = updated.Name;
        entity.Email = updated.Email;
        entity.Phone = updated.Phone;
        entity.Address = updated.Address;
        await Repository.UpdateAsync(entity);
        return _invoicingMapper.MapCustomerToDto(entity);
    }

    [Authorize(QuickBillsPermissions.Customers.Delete)]
    public override async Task DeleteAsync(Guid id)
    {
        await base.DeleteAsync(id);
    }
}
