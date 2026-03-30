using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace PersonalBudget.Services.Categories;

public interface ICategoryAppService : IApplicationService
{
    Task<CategoryDto> GetAsync(Guid id);
    Task<PagedResultDto<CategoryDto>> GetListAsync(GetCategoryListInput input);
    Task<CategoryDto> CreateAsync(CreateUpdateCategoryDto input);
    Task<CategoryDto> UpdateAsync(Guid id, CreateUpdateCategoryDto input);
    Task DeleteAsync(Guid id);
}
