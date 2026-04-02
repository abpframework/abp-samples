using System;
using System.ComponentModel.DataAnnotations;
using TravelPlanner.Entities;

namespace TravelPlanner.Services.Travels;

public class CreateUpdateTransportationDto
{
    [Required]
    public TransportationType Type { get; set; } = TransportationType.Flight;

    [Required]
    public DateTime DepartureTime { get; set; } = DateTime.Today;

    [StringLength(TransportationConsts.MaxLocationLength)]
    public string? FromLocation { get; set; }

    [StringLength(TransportationConsts.MaxLocationLength)]
    public string? ToLocation { get; set; }

    [StringLength(TransportationConsts.MaxCompanyNameLength)]
    public string? CompanyName { get; set; }

    [StringLength(TransportationConsts.MaxTicketNumberLength)]
    public string? TicketNumber { get; set; }

    [StringLength(TransportationConsts.MaxNotesLength)]
    public string? Notes { get; set; }
}
