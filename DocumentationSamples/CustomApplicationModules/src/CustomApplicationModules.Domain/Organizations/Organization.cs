using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace CustomApplicationModules.Organizations
{
    public class Organization : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        [Required]
        public virtual Guid? TenantId { get; protected set; }
    }
}
