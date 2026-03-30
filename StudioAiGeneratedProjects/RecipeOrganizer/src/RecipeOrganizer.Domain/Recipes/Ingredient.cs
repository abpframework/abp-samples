using System;
using Volo.Abp.Domain.Entities;

namespace RecipeOrganizer.Recipes;

public class Ingredient : Entity<Guid>
{
    protected Ingredient() { }

    public Ingredient(Guid id)
    {
        Id = id;
    }

    public string Name { get; set; }

    public float Quantity { get; set; }

    public string Unit { get; set; }
}
