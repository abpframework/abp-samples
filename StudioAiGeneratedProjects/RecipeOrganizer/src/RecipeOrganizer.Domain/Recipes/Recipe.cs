using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace RecipeOrganizer.Recipes;

public class Recipe : AuditedAggregateRoot<Guid>
{
    public string Title { get; set; }

    public string Description { get; set; }

    public int PreparationTime { get; set; }

    public RecipeDifficulty Difficulty { get; set; }

    public Guid CategoryId { get; set; }

    public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
}
