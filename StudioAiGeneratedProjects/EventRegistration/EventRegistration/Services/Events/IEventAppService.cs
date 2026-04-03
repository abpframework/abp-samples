using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace EventRegistration.Services.Events;

public interface IEventAppService : IApplicationService
{
    Task<EventDto> GetAsync(Guid id);
    Task<PagedResultDto<EventDto>> GetListAsync(GetEventListInput input);
    Task<EventDto> CreateAsync(CreateEventDto input);
    Task<EventDto> UpdateAsync(Guid id, UpdateEventDto input);
    Task DeleteAsync(Guid id);

    // Attendee operations
    Task<AttendeeDto> GetAttendeeAsync(Guid eventId, Guid attendeeId);
    Task<PagedResultDto<AttendeeDto>> GetAttendeesAsync(Guid eventId, PagedAndSortedResultRequestDto input);
    Task<AttendeeDto> AddAttendeeAsync(Guid eventId, CreateAttendeeDto input);
    Task<AttendeeDto> UpdateAttendeeAsync(Guid eventId, Guid attendeeId, UpdateAttendeeDto input);
    Task RemoveAttendeeAsync(Guid eventId, Guid attendeeId);
}
