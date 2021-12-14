using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace MyCompanyName.MyProjectName.Entities.Todos;

public class Todo : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public const int MinNameLength = 2;
    public const int MaxNameLength = 32;
    
    public string Name { get; set; }

    public Guid? TenantId { get; set; }
}