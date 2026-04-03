using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace MovieCollectionApp.Actors;

public class Actor : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public DateTime BirthDate { get; set; }

    public string Biography { get; set; }
}
