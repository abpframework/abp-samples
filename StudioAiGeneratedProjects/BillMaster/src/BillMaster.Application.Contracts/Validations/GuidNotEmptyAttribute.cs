using System;
using System.ComponentModel.DataAnnotations;

namespace BillMaster.Validations;

/// <summary>
/// Custom validation attribute to ensure a Guid is not empty (Guid.Empty).
/// </summary>
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Parameter)]
public class GuidNotEmptyAttribute : ValidationAttribute
{
    public override bool IsValid(object? value)
    {
        if (value is Guid guidValue)
        {
            return guidValue != Guid.Empty;
        }

        // If value is null or not a Guid, let other validators handle it (e.g., [Required])
        return true;
    }

    public override string FormatErrorMessage(string name)
    {
        return $"{name} cannot be empty.";
    }
}
