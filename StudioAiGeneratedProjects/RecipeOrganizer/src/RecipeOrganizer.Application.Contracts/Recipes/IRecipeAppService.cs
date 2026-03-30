using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RecipeOrganizer.Recipes;

public interface IRecipeAppService :
    ICrudAppService<
        RecipeDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateRecipeDto>
{
    Task<ListResultDto<CategoryLookupDto>> GetCategoryLookupAsync();
}
