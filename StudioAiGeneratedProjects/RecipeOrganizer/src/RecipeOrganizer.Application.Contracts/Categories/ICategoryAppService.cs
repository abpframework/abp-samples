using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RecipeOrganizer.Categories;

public interface ICategoryAppService :
    ICrudAppService<
        CategoryDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateCategoryDto>
{
}
