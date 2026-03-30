using System.ComponentModel.DataAnnotations;
using PersonalBudget.Entities;

namespace PersonalBudget.Services.Categories;

public class CreateUpdateCategoryDto
{
    [Required]
    [StringLength(CategoryConsts.MaxNameLength)]
    public string Name { get; set; } = string.Empty;

    [StringLength(CategoryConsts.MaxDescriptionLength)]
    public string? Description { get; set; }

    [StringLength(CategoryConsts.MaxIconLength)]
    public string? Icon { get; set; }
}
