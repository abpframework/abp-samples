using Volo.Abp.MultiTenancy;

namespace SeparateBackgroundJob.Common.Shared;

public class MyReportJobArgs : IMultiTenant
{
    public string? Content { get; set; }

    public Guid? UserId { get; set; }
    
    public Guid? TenantId { get; set; }
}