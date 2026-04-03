using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using EventRegistration.Entities;
using EventRegistration.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

namespace EventRegistration.Services.Events;

[Authorize(EventRegistrationPermissions.Events.Default)]
public class EventAppService : EventRegistrationAppService, IEventAppService
{
    private readonly IRepository<Event, Guid> _eventRepository;

    public EventAppService(IRepository<Event, Guid> eventRepository)
    {
        _eventRepository = eventRepository;
    }

    public async Task<EventDto> GetAsync(Guid id)
    {
        var @event = await (await _eventRepository.WithDetailsAsync(e => e.Attendees))
            .FirstOrDefaultAsync(e => e.Id == id);

        if (@event == null)
        {
            throw new BusinessException("EventRegistration:EventNotFound");
        }

        return MapToEventDto(@event);
    }

    public async Task<PagedResultDto<EventDto>> GetListAsync(GetEventListInput input)
    {
        var queryable = await _eventRepository.WithDetailsAsync(e => e.Attendees);

        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            queryable = queryable.Where(e =>
                e.Title.Contains(input.Filter) ||
                e.Location.Contains(input.Filter));
        }

        var totalCount = await queryable.CountAsync();

        var sorting = input.Sorting;
        if (string.IsNullOrWhiteSpace(sorting))
        {
            sorting = nameof(Event.StartDate) + " desc";
        }

        var events = await queryable
            .OrderBy(sorting)
            .PageBy(input.SkipCount, input.MaxResultCount)
            .ToListAsync();

        var dtos = events.Select(MapToEventDto).ToList();

        return new PagedResultDto<EventDto>(totalCount, dtos);
    }

    [Authorize(EventRegistrationPermissions.Events.Create)]
    public async Task<EventDto> CreateAsync(CreateEventDto input)
    {
        var @event = new Event(
            GuidGenerator.Create(),
            input.Title,
            input.StartDate,
            input.EndDate,
            input.Location,
            input.Capacity,
            input.Description
        );

        await _eventRepository.InsertAsync(@event);

        return MapToEventDto(@event);
    }

    [Authorize(EventRegistrationPermissions.Events.Edit)]
    public async Task<EventDto> UpdateAsync(Guid id, UpdateEventDto input)
    {
        var @event = await (await _eventRepository.WithDetailsAsync(e => e.Attendees))
            .FirstOrDefaultAsync(e => e.Id == id);

        if (@event == null)
        {
            throw new BusinessException("EventRegistration:EventNotFound");
        }

        @event.SetTitle(input.Title);
        @event.SetDescription(input.Description);
        @event.SetDates(input.StartDate, input.EndDate);
        @event.SetLocation(input.Location);
        @event.SetCapacity(input.Capacity);

        await _eventRepository.UpdateAsync(@event);

        return MapToEventDto(@event);
    }

    [Authorize(EventRegistrationPermissions.Events.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _eventRepository.DeleteAsync(id);
    }

    // --- Attendee operations ---

    [Authorize(EventRegistrationPermissions.Events.Attendees.Default)]
    public async Task<AttendeeDto> GetAttendeeAsync(Guid eventId, Guid attendeeId)
    {
        var @event = await GetEventWithAttendeesAsync(eventId);
        var attendee = @event.Attendees.FirstOrDefault(a => a.Id == attendeeId);

        if (attendee == null)
        {
            throw new BusinessException("EventRegistration:AttendeeNotFound");
        }

        return MapToAttendeeDto(attendee);
    }

    [Authorize(EventRegistrationPermissions.Events.Attendees.Default)]
    public async Task<PagedResultDto<AttendeeDto>> GetAttendeesAsync(Guid eventId, PagedAndSortedResultRequestDto input)
    {
        var @event = await GetEventWithAttendeesAsync(eventId);

        var attendees = @event.Attendees
            .Where(a => !a.IsDeleted)
            .ToList();

        var totalCount = attendees.Count;

        var sorting = input.Sorting;
        if (string.IsNullOrWhiteSpace(sorting))
        {
            sorting = nameof(Attendee.FirstName);
        }

        var pagedAttendees = attendees
            .AsQueryable()
            .OrderBy(sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount)
            .ToList();

        var dtos = pagedAttendees.Select(MapToAttendeeDto).ToList();

        return new PagedResultDto<AttendeeDto>(totalCount, dtos);
    }

    [Authorize(EventRegistrationPermissions.Events.Attendees.Create)]
    public async Task<AttendeeDto> AddAttendeeAsync(Guid eventId, CreateAttendeeDto input)
    {
        var @event = await GetEventWithAttendeesAsync(eventId);

        var attendee = @event.AddAttendee(
            GuidGenerator.Create(),
            input.FirstName,
            input.LastName,
            input.Email,
            input.PhoneNumber
        );

        await _eventRepository.UpdateAsync(@event);

        return MapToAttendeeDto(attendee);
    }

    [Authorize(EventRegistrationPermissions.Events.Attendees.Edit)]
    public async Task<AttendeeDto> UpdateAttendeeAsync(Guid eventId, Guid attendeeId, UpdateAttendeeDto input)
    {
        var @event = await GetEventWithAttendeesAsync(eventId);

        @event.UpdateAttendee(
            attendeeId,
            input.FirstName,
            input.LastName,
            input.Email,
            input.PhoneNumber
        );

        await _eventRepository.UpdateAsync(@event);

        var attendee = @event.Attendees.First(a => a.Id == attendeeId);
        return MapToAttendeeDto(attendee);
    }

    [Authorize(EventRegistrationPermissions.Events.Attendees.Delete)]
    public async Task RemoveAttendeeAsync(Guid eventId, Guid attendeeId)
    {
        var @event = await GetEventWithAttendeesAsync(eventId);
        @event.RemoveAttendee(attendeeId);
        await _eventRepository.UpdateAsync(@event);
    }

    // --- Private helpers ---

    private async Task<Event> GetEventWithAttendeesAsync(Guid eventId)
    {
        var @event = await (await _eventRepository.WithDetailsAsync(e => e.Attendees))
            .FirstOrDefaultAsync(e => e.Id == eventId);

        if (@event == null)
        {
            throw new BusinessException("EventRegistration:EventNotFound");
        }

        return @event;
    }

    private static EventDto MapToEventDto(Event @event)
    {
        return new EventDto
        {
            Id = @event.Id,
            Title = @event.Title,
            Description = @event.Description,
            StartDate = @event.StartDate,
            EndDate = @event.EndDate,
            Location = @event.Location,
            Capacity = @event.Capacity,
            IsCancelled = @event.IsCancelled,
            AttendeeCount = @event.Attendees.Count(a => !a.IsDeleted),
            Attendees = @event.Attendees.Where(a => !a.IsDeleted).Select(MapToAttendeeDto).ToList(),
            CreationTime = @event.CreationTime,
            CreatorId = @event.CreatorId,
            LastModificationTime = @event.LastModificationTime,
            LastModifierId = @event.LastModifierId
        };
    }

    private static AttendeeDto MapToAttendeeDto(Attendee attendee)
    {
        return new AttendeeDto
        {
            Id = attendee.Id,
            EventId = attendee.EventId,
            FirstName = attendee.FirstName,
            LastName = attendee.LastName,
            Email = attendee.Email,
            PhoneNumber = attendee.PhoneNumber,
            CreationTime = attendee.CreationTime,
            CreatorId = attendee.CreatorId,
            LastModificationTime = attendee.LastModificationTime,
            LastModifierId = attendee.LastModifierId
        };
    }
}
