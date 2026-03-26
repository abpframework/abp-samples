using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace MovieCollectionApp.Movies;

public class Movie : AuditedAggregateRoot<Guid>
{
    public string Title { get; set; }

    public int Year { get; set; }

    public string Description { get; set; }

    public float Rating { get; set; }

    public Guid GenreId { get; set; }

    public string ImageUrl { get; set; }

    public List<Guid> ActorIds { get; set; } = new List<Guid>();
}
