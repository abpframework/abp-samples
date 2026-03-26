using System;
using System.ComponentModel.DataAnnotations;
using MovieCollectionApp.Actors;

namespace MovieCollectionApp.Actors;

public class CreateUpdateActorDto
{
    [Required]
    [StringLength(ActorConsts.MaxNameLength)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }

    [StringLength(ActorConsts.MaxBiographyLength)]
    public string Biography { get; set; }
}
