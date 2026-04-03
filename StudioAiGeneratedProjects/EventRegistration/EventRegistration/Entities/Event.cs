using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace EventRegistration.Entities;

/// <summary>
/// Aggregate root for Event. Owns a collection of Attendees.
/// Uses rich domain model: private setters, factory methods, and domain invariants.
/// </summary>
public class Event : FullAuditedAggregateRoot<Guid>
{
    public string Title { get; private set; } = null!;
    public string? Description { get; private set; }
    public DateTime StartDate { get; private set; }
    public DateTime EndDate { get; private set; }
    public string Location { get; private set; } = null!;
    public int Capacity { get; private set; }
    public bool IsCancelled { get; private set; }

    private readonly List<Attendee> _attendees = new();
    public IReadOnlyCollection<Attendee> Attendees => _attendees.AsReadOnly();

    private Event()
    {
        // EF Core constructor
    }

    public Event(
        Guid id,
        string title,
        DateTime startDate,
        DateTime endDate,
        string location,
        int capacity,
        string? description = null)
        : base(id)
    {
        SetTitle(title);
        SetDates(startDate, endDate);
        SetLocation(location);
        SetCapacity(capacity);
        Description = description;
        IsCancelled = false;
    }

    public void SetTitle(string title)
    {
        Title = Check.NotNullOrWhiteSpace(title, nameof(title), maxLength: EventConsts.MaxTitleLength);
    }

    public void SetDescription(string? description)
    {
        if (description != null && description.Length > EventConsts.MaxDescriptionLength)
        {
            throw new BusinessException("EventRegistration:DescriptionTooLong");
        }
        Description = description;
    }

    public void SetDates(DateTime startDate, DateTime endDate)
    {
        if (endDate <= startDate)
        {
            throw new BusinessException("EventRegistration:EndDateMustBeAfterStartDate");
        }
        StartDate = startDate;
        EndDate = endDate;
    }

    public void SetLocation(string location)
    {
        Location = Check.NotNullOrWhiteSpace(location, nameof(location), maxLength: EventConsts.MaxLocationLength);
    }

    public void SetCapacity(int capacity)
    {
        if (capacity < 1)
        {
            throw new BusinessException("EventRegistration:CapacityMustBePositive");
        }
        Capacity = capacity;
    }

    public void Cancel()
    {
        if (IsCancelled)
        {
            throw new BusinessException("EventRegistration:EventAlreadyCancelled");
        }
        IsCancelled = true;
    }

    public void Reactivate()
    {
        if (!IsCancelled)
        {
            throw new BusinessException("EventRegistration:EventNotCancelled");
        }
        IsCancelled = false;
    }

    public Attendee AddAttendee(
        Guid attendeeId,
        string firstName,
        string lastName,
        string email,
        string? phoneNumber = null)
    {
        if (IsCancelled)
        {
            throw new BusinessException("EventRegistration:CannotRegisterToCancelledEvent");
        }

        if (_attendees.Count >= Capacity)
        {
            throw new BusinessException("EventRegistration:EventIsFull");
        }

        if (_attendees.Any(a => a.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && !a.IsDeleted))
        {
            throw new BusinessException("EventRegistration:AttendeeAlreadyRegistered");
        }

        var attendee = new Attendee(attendeeId, Id, firstName, lastName, email, phoneNumber);
        _attendees.Add(attendee);
        return attendee;
    }

    public void RemoveAttendee(Guid attendeeId)
    {
        var attendee = _attendees.FirstOrDefault(a => a.Id == attendeeId);
        if (attendee == null)
        {
            throw new BusinessException("EventRegistration:AttendeeNotFound");
        }
        _attendees.Remove(attendee);
    }

    public void UpdateAttendee(
        Guid attendeeId,
        string firstName,
        string lastName,
        string email,
        string? phoneNumber)
    {
        var attendee = _attendees.FirstOrDefault(a => a.Id == attendeeId);
        if (attendee == null)
        {
            throw new BusinessException("EventRegistration:AttendeeNotFound");
        }

        // Check duplicate email (excluding the current attendee)
        if (_attendees.Any(a => a.Id != attendeeId
            && a.Email.Equals(email, StringComparison.OrdinalIgnoreCase)
            && !a.IsDeleted))
        {
            throw new BusinessException("EventRegistration:AttendeeAlreadyRegistered");
        }

        attendee.Update(firstName, lastName, email, phoneNumber);
    }
}
