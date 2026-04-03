using System;
using Volo.Abp.Application.Dtos;

namespace EventRegistration.Services.Events;

public class AttendeeDto : FullAuditedEntityDto<Guid>
{
    public Guid EventId { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string? PhoneNumber { get; set; }
}
