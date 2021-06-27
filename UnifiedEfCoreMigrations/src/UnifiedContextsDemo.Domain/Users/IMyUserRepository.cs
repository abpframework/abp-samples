using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace UnifiedContextsDemo.Users
{
    public interface IMyUserRepository : IRepository<IdentityUser, Guid>
    {
        Task<IdentityUser> FindBySocialSecurityNumber(string number);
    }
}