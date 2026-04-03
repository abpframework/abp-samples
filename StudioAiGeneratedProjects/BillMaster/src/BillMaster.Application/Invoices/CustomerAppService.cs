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

[Authorize(BillMasterPermissions.Customers.Default)]
public class CustomerAppService : ApplicationService, ICustomerAppService
{
    private readonly IRepository<Customer, Guid> _repository;

    public CustomerAppService(IRepository<Customer, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<CustomerDto> GetAsync(Guid id)
    {
        var customer = await _repository.GetAsync(id);
        return ObjectMapper.Map<Customer, CustomerDto>(customer);
    }

    public async Task<PagedResultDto<CustomerDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var customers = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<CustomerDto>(
            totalCount,
            ObjectMapper.Map<List<Customer>, List<CustomerDto>>(customers)
        );
    }

    [Authorize(BillMasterPermissions.Customers.Create)]
    public async Task<CustomerDto> CreateAsync(CreateUpdateCustomerDto input)
    {
        var customer = ObjectMapper.Map<CreateUpdateCustomerDto, Customer>(input);
        await _repository.InsertAsync(customer);
        return ObjectMapper.Map<Customer, CustomerDto>(customer);
    }

    [Authorize(BillMasterPermissions.Customers.Edit)]
    public async Task<CustomerDto> UpdateAsync(Guid id, CreateUpdateCustomerDto input)
    {
        var customer = await _repository.GetAsync(id);
        ObjectMapper.Map(input, customer);
        await _repository.UpdateAsync(customer);
        return ObjectMapper.Map<Customer, CustomerDto>(customer);
    }

    [Authorize(BillMasterPermissions.Customers.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
