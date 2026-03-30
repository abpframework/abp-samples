using System.ComponentModel.DataAnnotations;

namespace RecipeOrganizer.Recipes;

public class CreateUpdateIngredientDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [Range(0.01, float.MaxValue, ErrorMessage = "Quantity must be greater than 0")]
    public float Quantity { get; set; } = 1;

    [Required]
    [StringLength(32)]
    public string Unit { get; set; } = string.Empty;
}
