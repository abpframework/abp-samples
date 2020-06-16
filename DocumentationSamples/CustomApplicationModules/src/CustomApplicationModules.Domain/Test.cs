using System;
using CustomApplicationModules.Users;
using Volo.Abp.Domain.Entities.Auditing;

namespace CustomApplicationModules
{
    public class Test : FullAuditedEntityWithUser<Guid, AppUser>
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
