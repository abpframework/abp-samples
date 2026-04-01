using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp;

namespace BillMaster.Invoices;

public class Customer : AuditedAggregateRoot<Guid>
{
    public string Name { get; private set; }

    public string Email { get; private set; }

    public string Phone { get; private set; }

    public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    /// <summary>
    /// EF Core constructor for deserialization.
    /// </summary>
    protected Customer()
    {
    }

    /// <summary>
    /// Creates a new customer with required fields.
    /// </summary>
    /// <param name="name">Customer name (required)</param>
    /// <param name="email">Customer email (required)</param>
    /// <param name="phone">Customer phone (required)</param>
    public Customer(string name, string email, string phone)
    {
        Check.NotNullOrWhiteSpace(name, nameof(name));
        Check.NotNullOrWhiteSpace(email, nameof(email));
        Check.NotNullOrWhiteSpace(phone, nameof(phone));

        Name = name;
        Email = email;
        Phone = phone;
    }

    /// <summary>
    /// Updates customer information with validation.
    /// </summary>
    public void Update(string name, string email, string phone)
    {
        Check.NotNullOrWhiteSpace(name, nameof(name));
        Check.NotNullOrWhiteSpace(email, nameof(email));
        Check.NotNullOrWhiteSpace(phone, nameof(phone));

        Name = name;
        Email = email;
        Phone = phone;
    }
}
