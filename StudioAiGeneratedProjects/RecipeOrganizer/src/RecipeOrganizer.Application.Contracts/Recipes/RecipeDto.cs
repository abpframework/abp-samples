using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace RecipeOrganizer.Recipes;

public class RecipeDto : AuditedEntityDto<Guid>
{
    public string Title { get; set; }

    public string Description { get; set; }

    public int PreparationTime { get; set; }

    public RecipeDifficulty Difficulty { get; set; }

    public Guid CategoryId { get; set; }

    public string CategoryName { get; set; }

    public List<IngredientDto> Ingredients { get; set; } = new List<IngredientDto>();
}
