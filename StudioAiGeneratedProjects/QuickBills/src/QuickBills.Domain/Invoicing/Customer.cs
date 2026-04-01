using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp;

namespace QuickBills.Invoicing;

/// <summary>
/// Represents a customer in the invoicing system.
/// </summary>
public class Customer : AuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Gets or sets the customer's full name.
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the customer's email address.
    /// </summary>
    public string Email { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the customer's phone number.
    /// </summary>
    public string? Phone { get; set; }

    /// <summary>
    /// Gets or sets the customer's billing address.
    /// </summary>
    public string? Address { get; set; }

    /// <summary>
    /// Gets or sets the customer's billing city.
    /// </summary>
    public string? City { get; set; }

    /// <summary>
    /// Gets or sets the customer's billing country.
    /// </summary>
    public string? Country { get; set; }

    /// <summary>
    /// Collection of invoices for this customer.
    /// </summary>
    public ICollection<Invoice> Invoices { get; set; } = [];

    /// <summary>
    /// Initializes a new instance of the <see cref="Customer"/> class.
    /// </summary>
    public Customer() { }

    /// <summary>
    /// Initializes a new instance of the <see cref="Customer"/> class with an ID and name.
    /// </summary>
    public Customer(Guid id, string name, string email) : this()
    {
        Check.NotNullOrWhiteSpace(name, nameof(name), maxLength: 256);
        Check.NotNullOrWhiteSpace(email, nameof(email), maxLength: 256);
        Check.NotNull(id, nameof(id));
        
        // Validate email format with simple regex
        if (!System.Text.RegularExpressions.Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
        {
            throw new BusinessException("InvalidEmailFormat", "Email address format is invalid.");
        }
        
        Id = id;
        Name = name;
        Email = email;
    }
}
