using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace MovieCollectionApp.Genres;

public class Genre : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public string Description { get; set; }
}
