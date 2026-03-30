using System.ComponentModel.DataAnnotations;

namespace RecipeOrganizer.Categories;

public class CreateUpdateCategoryDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [StringLength(512)]
    public string Description { get; set; } = string.Empty;

    [StringLength(64)]
    public string IconClass { get; set; } = "fa fa-utensils";
}
