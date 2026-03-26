using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MovieCollectionApp.Movies;

namespace MovieCollectionApp.Movies;

public class CreateUpdateMovieDto
{
    [Required]
    [StringLength(MovieConsts.MaxTitleLength)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [Range(MovieConsts.MinYear, 2100)]
    public int Year { get; set; }

    [StringLength(MovieConsts.MaxDescriptionLength)]
    public string Description { get; set; }

    [Range(0, MovieConsts.MaxRating)]
    public float Rating { get; set; }

    [Required]
    public Guid GenreId { get; set; }

    public List<Guid> ActorIds { get; set; } = new List<Guid>();
}
