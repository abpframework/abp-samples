using Volo.Abp.Application.Dtos;

namespace RecipeOrganizer.Recipes;

public class CategoryLookupDto : EntityDto<System.Guid>
{
    public string Name { get; set; }
}
