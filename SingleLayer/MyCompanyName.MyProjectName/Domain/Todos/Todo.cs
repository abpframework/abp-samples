using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace MyCompanyName.MyProjectName.Domain.Todos;

public class Todo : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public string Name { get; set; }

    public Guid? TenantId { get; set; }

    protected Todo()
    {
    }

    public Todo(Guid id, [NotNull] string name, Guid? tenantId = null) : base(id)
    {
        TenantId = tenantId;
        
        SetName(name);
    }

    public void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(name, nameof(name), TodoConsts.MaxNameLength, TodoConsts.MinNameLength);
    }
}