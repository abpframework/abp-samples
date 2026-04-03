using System.ComponentModel.DataAnnotations;
using EventRegistration.Entities;

namespace EventRegistration.Services.Events;

public class CreateAttendeeDto
{
    [Required]
    [StringLength(AttendeeConsts.MaxFirstNameLength)]
    public string FirstName { get; set; } = null!;

    [Required]
    [StringLength(AttendeeConsts.MaxLastNameLength)]
    public string LastName { get; set; } = null!;

    [Required]
    [EmailAddress]
    [StringLength(AttendeeConsts.MaxEmailLength)]
    public string Email { get; set; } = null!;

    [StringLength(AttendeeConsts.MaxPhoneNumberLength)]
    public string? PhoneNumber { get; set; }
}
