using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace PersonalBudget.Services.Expenses;

public interface IExpenseAppService : IApplicationService
{
    Task<ExpenseDto> GetAsync(Guid id);
    Task<PagedResultDto<ExpenseDto>> GetListAsync(GetExpenseListInput input);
    Task<ExpenseDto> CreateAsync(CreateUpdateExpenseDto input);
    Task<ExpenseDto> UpdateAsync(Guid id, CreateUpdateExpenseDto input);
    Task DeleteAsync(Guid id);
    Task<List<CategoryLookupDto>> GetCategoryLookupAsync();
}
