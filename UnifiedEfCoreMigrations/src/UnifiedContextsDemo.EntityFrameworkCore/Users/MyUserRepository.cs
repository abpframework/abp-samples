using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UnifiedContextsDemo.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity;

namespace UnifiedContextsDemo.Users
{
    public class MyUserRepository 
        : EfCoreRepository<UnifiedContextsDemoDbContext, IdentityUser, Guid>, 
          IMyUserRepository
    {
        public MyUserRepository(
            IDbContextProvider<UnifiedContextsDemoDbContext> dbContextProvider) 
            : base(dbContextProvider)
        {
        }

        public async Task<IdentityUser> FindBySocialSecurityNumber(string number)
        {
            var dbContext = await GetDbContextAsync();
            return await dbContext.Set<IdentityUser>()
                .Where(u => EF.Property<string>(u, MyUserExtensions.SocialSecurityNumber) == number)
                .FirstOrDefaultAsync();
        }
    }
}