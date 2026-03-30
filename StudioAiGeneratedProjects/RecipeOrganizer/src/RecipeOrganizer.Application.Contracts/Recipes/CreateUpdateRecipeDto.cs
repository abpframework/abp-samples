using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RecipeOrganizer.Recipes;

public class CreateUpdateRecipeDto
{
    [Required]
    [StringLength(256)]
    public string Title { get; set; } = string.Empty;

    [StringLength(2048)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(1, 1440, ErrorMessage = "Preparation time must be between 1 and 1440 minutes")]
    public int PreparationTime { get; set; } = 30;

    [Required]
    public RecipeDifficulty Difficulty { get; set; } = RecipeDifficulty.Easy;

    [Required]
    public Guid CategoryId { get; set; }

    public List<CreateUpdateIngredientDto> Ingredients { get; set; } = new List<CreateUpdateIngredientDto>();
}
