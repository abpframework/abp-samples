using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using RecipeOrganizer.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RecipeOrganizer.Categories;

[Authorize(RecipeOrganizerPermissions.Categories.Default)]
public class CategoryAppService : ApplicationService, ICategoryAppService
{
    private readonly IRepository<Category, Guid> _repository;

    public CategoryAppService(IRepository<Category, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<CategoryDto> GetAsync(Guid id)
    {
        var category = await _repository.GetAsync(id);
        return ObjectMapper.Map<Category, CategoryDto>(category);
    }

    public async Task<PagedResultDto<CategoryDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var categories = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<CategoryDto>(
            totalCount,
            ObjectMapper.Map<List<Category>, List<CategoryDto>>(categories)
        );
    }

    [Authorize(RecipeOrganizerPermissions.Categories.Create)]
    public async Task<CategoryDto> CreateAsync(CreateUpdateCategoryDto input)
    {
        var category = ObjectMapper.Map<CreateUpdateCategoryDto, Category>(input);
        await _repository.InsertAsync(category);
        return ObjectMapper.Map<Category, CategoryDto>(category);
    }

    [Authorize(RecipeOrganizerPermissions.Categories.Edit)]
    public async Task<CategoryDto> UpdateAsync(Guid id, CreateUpdateCategoryDto input)
    {
        var category = await _repository.GetAsync(id);
        ObjectMapper.Map(input, category);
        await _repository.UpdateAsync(category);
        return ObjectMapper.Map<Category, CategoryDto>(category);
    }

    [Authorize(RecipeOrganizerPermissions.Categories.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
