using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using PersonalBudget.Entities;
using PersonalBudget.ObjectMapping;
using PersonalBudget.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

namespace PersonalBudget.Services.Expenses;

[Authorize(PersonalBudgetPermissions.Expenses.Default)]
public class ExpenseAppService : PersonalBudgetAppService, IExpenseAppService
{
    private readonly IRepository<Expense, Guid> _expenseRepository;
    private readonly IRepository<Category, Guid> _categoryRepository;
    private readonly PersonalBudgetWebMappers _mapper;

    public ExpenseAppService(
        IRepository<Expense, Guid> expenseRepository,
        IRepository<Category, Guid> categoryRepository,
        PersonalBudgetWebMappers mapper)
    {
        _expenseRepository = expenseRepository;
        _categoryRepository = categoryRepository;
        _mapper = mapper;
    }

    public async Task<ExpenseDto> GetAsync(Guid id)
    {
        var expense = await _expenseRepository.GetAsync(id);
        var dto = _mapper.Map(expense);

        var category = await _categoryRepository.FindAsync(expense.CategoryId);
        dto.CategoryName = category?.Name ?? "[Deleted]";

        return dto;
    }

    public async Task<PagedResultDto<ExpenseDto>> GetListAsync(GetExpenseListInput input)
    {
        var queryable = await _expenseRepository.GetQueryableAsync();

        // Apply filters
        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            var filter = input.Filter.ToLower();
            queryable = queryable.Where(e => e.Description.ToLower().Contains(filter));
        }

        if (input.CategoryId.HasValue)
        {
            queryable = queryable.Where(e => e.CategoryId == input.CategoryId.Value);
        }

        if (input.MinAmount.HasValue)
        {
            queryable = queryable.Where(e => e.Amount >= input.MinAmount.Value);
        }

        if (input.MaxAmount.HasValue)
        {
            queryable = queryable.Where(e => e.Amount <= input.MaxAmount.Value);
        }

        if (input.StartDate.HasValue)
        {
            queryable = queryable.Where(e => e.Date >= input.StartDate.Value);
        }

        if (input.EndDate.HasValue)
        {
            var endDate = input.EndDate.Value.Date.AddDays(1).AddTicks(-1);
            queryable = queryable.Where(e => e.Date <= endDate);
        }

        var totalCount = queryable.Count();

        var sorting = input.Sorting ?? "Date desc";
        queryable = ApplySorting(queryable, sorting);

        var expenses = queryable
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount)
            .ToList();

        // Resolve category names in memory (avoid N+1 with MongoDB)
        var categoryIds = expenses.Select(e => e.CategoryId).Distinct().ToList();
        var categoryQueryable = await _categoryRepository.GetQueryableAsync();
        var categories = categoryQueryable
            .Where(c => categoryIds.Contains(c.Id))
            .ToDictionary(c => c.Id, c => c.Name);

        var dtos = expenses.Select(expense =>
        {
            var dto = _mapper.Map(expense);
            dto.CategoryName = categories.TryGetValue(expense.CategoryId, out var name)
                ? name
                : "[Deleted]";
            return dto;
        }).ToList();

        return new PagedResultDto<ExpenseDto>(totalCount, dtos);
    }

    [Authorize(PersonalBudgetPermissions.Expenses.Create)]
    public async Task<ExpenseDto> CreateAsync(CreateUpdateExpenseDto input)
    {
        var expense = new Expense(
            GuidGenerator.Create(),
            input.CategoryId,
            input.Description,
            input.Amount,
            input.Date,
            input.Notes
        );

        await _expenseRepository.InsertAsync(expense);

        var dto = _mapper.Map(expense);
        var category = await _categoryRepository.FindAsync(expense.CategoryId);
        dto.CategoryName = category?.Name ?? "[Deleted]";

        return dto;
    }

    [Authorize(PersonalBudgetPermissions.Expenses.Edit)]
    public async Task<ExpenseDto> UpdateAsync(Guid id, CreateUpdateExpenseDto input)
    {
        var expense = await _expenseRepository.GetAsync(id);

        expense.SetCategoryId(input.CategoryId);
        expense.SetDescription(input.Description);
        expense.SetAmount(input.Amount);
        expense.SetDate(input.Date);
        expense.SetNotes(input.Notes);

        await _expenseRepository.UpdateAsync(expense);

        var dto = _mapper.Map(expense);
        var category = await _categoryRepository.FindAsync(expense.CategoryId);
        dto.CategoryName = category?.Name ?? "[Deleted]";

        return dto;
    }

    [Authorize(PersonalBudgetPermissions.Expenses.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _expenseRepository.DeleteAsync(id);
    }

    [AllowAnonymous]
    public async Task<List<CategoryLookupDto>> GetCategoryLookupAsync()
    {
        var queryable = await _categoryRepository.GetQueryableAsync();
        return queryable
            .OrderBy(c => c.Name)
            .Select(c => new CategoryLookupDto { Id = c.Id, Name = c.Name })
            .ToList();
    }

    private static IQueryable<Expense> ApplySorting(IQueryable<Expense> queryable, string sorting)
    {
        return sorting.ToLower() switch
        {
            "amount" => queryable.OrderBy(e => e.Amount),
            "amount desc" => queryable.OrderByDescending(e => e.Amount),
            "date" => queryable.OrderBy(e => e.Date),
            "description" => queryable.OrderBy(e => e.Description),
            "description desc" => queryable.OrderByDescending(e => e.Description),
            _ => queryable.OrderByDescending(e => e.Date)
        };
    }
}
