using System;
using TravelPlanner.Entities;
using Volo.Abp.Application.Dtos;

namespace TravelPlanner.Services.Travels;

public class TransportationDto : EntityDto<Guid>
{
    public Guid TravelId { get; set; }
    public TransportationType Type { get; set; }
    public DateTime DepartureTime { get; set; }
    public string? FromLocation { get; set; }
    public string? ToLocation { get; set; }
    public string? CompanyName { get; set; }
    public string? TicketNumber { get; set; }
    public string? Notes { get; set; }
}
