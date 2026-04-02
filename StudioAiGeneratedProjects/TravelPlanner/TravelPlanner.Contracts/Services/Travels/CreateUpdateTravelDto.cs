using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TravelPlanner.Entities;

namespace TravelPlanner.Services.Travels;

public class CreateUpdateTravelDto
{
    [Required]
    [StringLength(TravelConsts.MaxTripNameLength)]
    public string TripName { get; set; } = null!;

    [Required]
    public DateTime StartDate { get; set; } = DateTime.Today;

    [Required]
    public DateTime EndDate { get; set; } = DateTime.Today.AddDays(7);

    public TravelStatus Status { get; set; } = TravelStatus.Draft;

    [StringLength(TravelConsts.MaxDestinationLength)]
    public string? Destination { get; set; }

    [StringLength(TravelConsts.MaxNotesLength)]
    public string? Notes { get; set; }

    public List<CreateUpdateTransportationDto> Transportations { get; set; } = new();
}
