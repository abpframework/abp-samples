using Microsoft.EntityFrameworkCore;
using Shouldly;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Xunit;

namespace UnifiedContextsDemo.EntityFrameworkCore.Samples
{
    /* This is just an example test class.
     * Normally, you don't test ABP framework code
     * (like default AppUser repository IRepository<AppUser, Guid> here).
     * Only test your custom repository methods.
     */
    public class SampleRepositoryTests : UnifiedContextsDemoEntityFrameworkCoreTestBase
    {
        private readonly IRepository<IdentityUser, Guid> _appUserRepository;

        public SampleRepositoryTests()
        {
            _appUserRepository = GetRequiredService<IRepository<IdentityUser, Guid>>();
        }

        [Fact]
        public async Task Should_Work_With_Custom_Properties()
        {
            /* Need to manually start Unit Of Work because
             * FirstOrDefaultAsync should be executed while db connection / context is available.
             */
            await WithUnitOfWorkAsync(async () =>
            {
                var adminUser = await (await _appUserRepository.GetQueryableAsync())
                    .Where(u => u.UserName == "admin")
                    .FirstOrDefaultAsync();

                adminUser.ShouldNotBeNull();
                
                //It should be null by default since we haven't set it yet ("" is the default value)
                adminUser.GetProperty("SocialSecurityNumber").ShouldBe("");

                adminUser.SetProperty("SocialSecurityNumber", "1234");
            });
            
            await WithUnitOfWorkAsync(async () =>
            {
                var adminUser = await (await _appUserRepository.GetQueryableAsync())
                    .Where(u => u.UserName == "admin")
                    .FirstOrDefaultAsync();

                adminUser.ShouldNotBeNull();
                
                //We get the value that was set in the previous code block
                adminUser.GetProperty("SocialSecurityNumber").ShouldBe("1234");
            });
        }
    }
}
