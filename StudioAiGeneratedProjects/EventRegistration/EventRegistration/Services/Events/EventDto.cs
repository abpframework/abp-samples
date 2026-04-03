using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace EventRegistration.Services.Events;

public class EventDto : FullAuditedEntityDto<Guid>
{
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Location { get; set; } = null!;
    public int Capacity { get; set; }
    public bool IsCancelled { get; set; }
    public int AttendeeCount { get; set; }
    public List<AttendeeDto> Attendees { get; set; } = new();
}
