using System.ComponentModel.DataAnnotations;
using MovieCollectionApp.Genres;

namespace MovieCollectionApp.Genres;

public class CreateUpdateGenreDto
{
    [Required]
    [StringLength(GenreConsts.MaxNameLength)]
    public string Name { get; set; } = string.Empty;

    [StringLength(GenreConsts.MaxDescriptionLength)]
    public string Description { get; set; }
}
