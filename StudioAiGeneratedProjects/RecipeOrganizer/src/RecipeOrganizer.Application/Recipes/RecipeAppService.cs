using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using RecipeOrganizer.Categories;
using RecipeOrganizer.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RecipeOrganizer.Recipes;

[Authorize(RecipeOrganizerPermissions.Recipes.Default)]
public class RecipeAppService : ApplicationService, IRecipeAppService
{
    private readonly IRepository<Recipe, Guid> _repository;
    private readonly IRepository<Category, Guid> _categoryRepository;

    public RecipeAppService(
        IRepository<Recipe, Guid> repository,
        IRepository<Category, Guid> categoryRepository)
    {
        _repository = repository;
        _categoryRepository = categoryRepository;
    }

    public async Task<RecipeDto> GetAsync(Guid id)
    {
        var recipe = await _repository.GetAsync(id);
        var dto = ObjectMapper.Map<Recipe, RecipeDto>(recipe);

        var category = await _categoryRepository.FindAsync(recipe.CategoryId);
        dto.CategoryName = category?.Name ?? string.Empty;
        dto.Ingredients = ObjectMapper.Map<List<Ingredient>, List<IngredientDto>>(recipe.Ingredients);

        return dto;
    }

    public async Task<PagedResultDto<RecipeDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var recipeQueryable = await _repository.GetQueryableAsync();
        var categoryQueryable = await _categoryRepository.GetQueryableAsync();

        var query = recipeQueryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Title" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var recipes = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(recipeQueryable);

        var categoryIds = recipes.Select(r => r.CategoryId).Distinct().ToList();
        var categories = await AsyncExecuter.ToListAsync(
            categoryQueryable.Where(c => categoryIds.Contains(c.Id))
        );

        var categoryDict = categories.ToDictionary(c => c.Id, c => c.Name);

        var dtos = ObjectMapper.Map<List<Recipe>, List<RecipeDto>>(recipes);
        for (int i = 0; i < dtos.Count; i++)
        {
            dtos[i].CategoryName = categoryDict.GetValueOrDefault(dtos[i].CategoryId, string.Empty);
            dtos[i].Ingredients = ObjectMapper.Map<List<Ingredient>, List<IngredientDto>>(recipes[i].Ingredients);
        }

        return new PagedResultDto<RecipeDto>(totalCount, dtos);
    }

    [Authorize(RecipeOrganizerPermissions.Recipes.Create)]
    public async Task<RecipeDto> CreateAsync(CreateUpdateRecipeDto input)
    {
        if (input.CategoryId == Guid.Empty)
        {
            throw new Volo.Abp.UserFriendlyException("Please select a category.");
        }
        var recipe = ObjectMapper.Map<CreateUpdateRecipeDto, Recipe>(input);

        // Map ingredients manually since Mapperly ignores them on the Recipe mapper
        recipe.Ingredients = input.Ingredients
            .Select(i =>
            {
                var ingredient = ObjectMapper.Map<CreateUpdateIngredientDto, Ingredient>(i);
                ingredient.Id = GuidGenerator.Create();
                return ingredient;
            })
            .ToList();

        await _repository.InsertAsync(recipe);

        var dto = ObjectMapper.Map<Recipe, RecipeDto>(recipe);
        var category = await _categoryRepository.FindAsync(recipe.CategoryId);
        dto.CategoryName = category?.Name ?? string.Empty;
        dto.Ingredients = ObjectMapper.Map<List<Ingredient>, List<IngredientDto>>(recipe.Ingredients);

        return dto;
    }

    [Authorize(RecipeOrganizerPermissions.Recipes.Edit)]
    public async Task<RecipeDto> UpdateAsync(Guid id, CreateUpdateRecipeDto input)
    {
        if (input.CategoryId == Guid.Empty)
        {
            throw new Volo.Abp.UserFriendlyException("Please select a category.");
        }
        var recipe = await _repository.GetAsync(id);
        ObjectMapper.Map(input, recipe);

        // Replace ingredients list
        recipe.Ingredients = input.Ingredients
            .Select(i =>
            {
                var ingredient = ObjectMapper.Map<CreateUpdateIngredientDto, Ingredient>(i);
                ingredient.Id = GuidGenerator.Create();
                return ingredient;
            })
            .ToList();

        await _repository.UpdateAsync(recipe);

        var dto = ObjectMapper.Map<Recipe, RecipeDto>(recipe);
        var category = await _categoryRepository.FindAsync(recipe.CategoryId);
        dto.CategoryName = category?.Name ?? string.Empty;
        dto.Ingredients = ObjectMapper.Map<List<Ingredient>, List<IngredientDto>>(recipe.Ingredients);

        return dto;
    }

    [Authorize(RecipeOrganizerPermissions.Recipes.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }

    public async Task<ListResultDto<CategoryLookupDto>> GetCategoryLookupAsync()
    {
        var queryable = await _categoryRepository.GetQueryableAsync();
        var categories = await AsyncExecuter.ToListAsync(
            queryable.OrderBy(c => c.Name)
        );

        return new ListResultDto<CategoryLookupDto>(
            categories.Select(c => new CategoryLookupDto { Id = c.Id, Name = c.Name, }).ToList()
        );
    }
}
