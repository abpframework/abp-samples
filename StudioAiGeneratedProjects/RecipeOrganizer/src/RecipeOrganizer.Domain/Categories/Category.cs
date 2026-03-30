using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace RecipeOrganizer.Categories;

public class Category : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public string Description { get; set; }

    public string IconClass { get; set; }
}
