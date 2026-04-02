using System;
using System.Collections.Generic;
using TravelPlanner.Entities;
using Volo.Abp.Application.Dtos;

namespace TravelPlanner.Services.Travels;

public class TravelDto : AuditedEntityDto<Guid>
{
    public string TripName { get; set; } = null!;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public TravelStatus Status { get; set; }
    public string? Destination { get; set; }
    public string? Notes { get; set; }
    public List<TransportationDto> Transportations { get; set; } = new();
}
