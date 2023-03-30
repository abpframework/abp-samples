using Volo.Abp.Domain.Entities.Auditing;

namespace DapperDemo.Entities;

public class Book : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public DateTime PublishDate { get; set; }

    public float Price { get; set; }
}