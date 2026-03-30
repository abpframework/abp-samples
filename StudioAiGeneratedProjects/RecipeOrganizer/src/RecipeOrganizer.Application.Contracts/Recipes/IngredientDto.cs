using System;

namespace RecipeOrganizer.Recipes;

public class IngredientDto
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public float Quantity { get; set; }

    public string Unit { get; set; }
}
