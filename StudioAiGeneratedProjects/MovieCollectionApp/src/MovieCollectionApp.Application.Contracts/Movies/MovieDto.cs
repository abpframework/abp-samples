using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace MovieCollectionApp.Movies;

public class MovieDto : AuditedEntityDto<Guid>
{
    public string Title { get; set; }

    public int Year { get; set; }

    public string Description { get; set; }

    public float Rating { get; set; }

    public string ImageUrl { get; set; }

    public Guid GenreId { get; set; }

    public string GenreName { get; set; }

    public List<Guid> ActorIds { get; set; }

    public List<string> ActorNames { get; set; }
}
