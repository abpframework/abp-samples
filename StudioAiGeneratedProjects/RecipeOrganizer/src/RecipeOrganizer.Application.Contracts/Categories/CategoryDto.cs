using System;
using Volo.Abp.Application.Dtos;

namespace RecipeOrganizer.Categories;

public class CategoryDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }

    public string Description { get; set; }

    public string IconClass { get; set; }
}
