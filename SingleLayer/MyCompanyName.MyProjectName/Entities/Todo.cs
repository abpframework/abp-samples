using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace MyCompanyName.MyProjectName.Entities;

public class Todo : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public const int MaxTextLength = 32;
    
    public string Text { get; set; }

    public Guid? TenantId { get; set; }
}