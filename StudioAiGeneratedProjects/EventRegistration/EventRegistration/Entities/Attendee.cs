using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace EventRegistration.Entities;

/// <summary>
/// Child entity of Event aggregate. Cannot be created outside the Event aggregate.
/// </summary>
public class Attendee : FullAuditedEntity<Guid>
{
    public Guid EventId { get; private set; }
    public string FirstName { get; private set; } = null!;
    public string LastName { get; private set; } = null!;
    public string Email { get; private set; } = null!;
    public string? PhoneNumber { get; private set; }

    private Attendee()
    {
        // EF Core constructor
    }

    internal Attendee(
        Guid id,
        Guid eventId,
        string firstName,
        string lastName,
        string email,
        string? phoneNumber = null)
        : base(id)
    {
        EventId = eventId;
        SetFirstName(firstName);
        SetLastName(lastName);
        SetEmail(email);
        PhoneNumber = phoneNumber;
    }

    internal void Update(string firstName, string lastName, string email, string? phoneNumber)
    {
        SetFirstName(firstName);
        SetLastName(lastName);
        SetEmail(email);
        PhoneNumber = phoneNumber;
    }

    private void SetFirstName(string firstName)
    {
        FirstName = Check.NotNullOrWhiteSpace(firstName, nameof(firstName), maxLength: AttendeeConsts.MaxFirstNameLength);
    }

    private void SetLastName(string lastName)
    {
        LastName = Check.NotNullOrWhiteSpace(lastName, nameof(lastName), maxLength: AttendeeConsts.MaxLastNameLength);
    }

    private void SetEmail(string email)
    {
        Email = Check.NotNullOrWhiteSpace(email, nameof(email), maxLength: AttendeeConsts.MaxEmailLength);
    }
}
