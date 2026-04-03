using System;
using System.ComponentModel.DataAnnotations;
using EventRegistration.Entities;

namespace EventRegistration.Services.Events;

public class CreateEventDto
{
    [Required]
    [StringLength(EventConsts.MaxTitleLength)]
    public string Title { get; set; } = null!;

    [StringLength(EventConsts.MaxDescriptionLength)]
    public string? Description { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    [Required]
    [StringLength(EventConsts.MaxLocationLength)]
    public string Location { get; set; } = null!;

    [Required]
    [Range(1, int.MaxValue)]
    public int Capacity { get; set; }
}
