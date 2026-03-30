using Volo.Abp.Application.Dtos;

namespace PersonalBudget.Services.Categories;

public class GetCategoryListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
