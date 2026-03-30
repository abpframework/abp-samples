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

namespace PersonalBudget.Services.Categories;

[Authorize(PersonalBudgetPermissions.Categories.Default)]
public class CategoryAppService : PersonalBudgetAppService, ICategoryAppService
{
    private readonly IRepository<Category, Guid> _categoryRepository;
    private readonly PersonalBudgetWebMappers _mapper;

    public CategoryAppService(
        IRepository<Category, Guid> categoryRepository,
        PersonalBudgetWebMappers mapper)
    {
        _categoryRepository = categoryRepository;
        _mapper = mapper;
    }

    public async Task<CategoryDto> GetAsync(Guid id)
    {
        var category = await _categoryRepository.GetAsync(id);
        return _mapper.Map(category);
    }

    public async Task<PagedResultDto<CategoryDto>> GetListAsync(GetCategoryListInput input)
    {
        var queryable = await _categoryRepository.GetQueryableAsync();

        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            var filter = input.Filter.ToLower();
            queryable = queryable.Where(c => c.Name.ToLower().Contains(filter));
        }

        var totalCount = queryable.Count();

        var sorting = input.Sorting ?? nameof(Category.Name);
        queryable = ApplySorting(queryable, sorting);

        var items = queryable
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount)
            .ToList();

        return new PagedResultDto<CategoryDto>(
            totalCount,
            _mapper.MapCategoryList(items)
        );
    }

    [Authorize(PersonalBudgetPermissions.Categories.Create)]
    public async Task<CategoryDto> CreateAsync(CreateUpdateCategoryDto input)
    {
        var category = new Category(
            GuidGenerator.Create(),
            input.Name,
            input.Description,
            input.Icon
        );

        await _categoryRepository.InsertAsync(category);
        return _mapper.Map(category);
    }

    [Authorize(PersonalBudgetPermissions.Categories.Edit)]
    public async Task<CategoryDto> UpdateAsync(Guid id, CreateUpdateCategoryDto input)
    {
        var category = await _categoryRepository.GetAsync(id);

        category.SetName(input.Name);
        category.SetDescription(input.Description);
        category.SetIcon(input.Icon);

        await _categoryRepository.UpdateAsync(category);
        return _mapper.Map(category);
    }

    [Authorize(PersonalBudgetPermissions.Categories.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        var expenseRepository = LazyServiceProvider.LazyGetRequiredService<IRepository<Expense, Guid>>();
        var queryable = await expenseRepository.GetQueryableAsync();
        var hasExpenses = queryable.Any(e => e.CategoryId == id);

        if (hasExpenses)
        {
            throw new Volo.Abp.UserFriendlyException(L["CategoryHasExpensesError"]);
        }

        await _categoryRepository.DeleteAsync(id);
    }

    private static IQueryable<Category> ApplySorting(IQueryable<Category> queryable, string sorting)
    {
        return sorting.ToLower() switch
        {
            "name desc" => queryable.OrderByDescending(c => c.Name),
            "creationtime" => queryable.OrderBy(c => c.CreationTime),
            "creationtime desc" => queryable.OrderByDescending(c => c.CreationTime),
            _ => queryable.OrderBy(c => c.Name)
        };
    }
}
