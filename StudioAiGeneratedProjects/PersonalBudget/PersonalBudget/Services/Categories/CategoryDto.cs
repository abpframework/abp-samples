using System;
using Volo.Abp.Application.Dtos;

namespace PersonalBudget.Services.Categories;

public class CategoryDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Icon { get; set; }
}
