using System;
using System.Threading.Tasks;
using EventOrganizer.Users;
using MongoDB.Driver.Linq;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Xunit;

namespace EventOrganizer.MongoDB.Samples
{
    /* This is just an example test class.
     * Normally, you don't test ABP framework code
     * (like default AppUser repository IRepository<AppUser, Guid> here).
     * Only test your custom repository methods.
     */
    [Collection(EventOrganizerTestConsts.CollectionDefinitionName)]
    public class SampleRepositoryTests : EventOrganizerMongoDbTestBase
    {
        private readonly IRepository<AppUser, Guid> _appUserRepository;

        public SampleRepositoryTests()
        {
            _appUserRepository = GetRequiredService<IRepository<AppUser, Guid>>();
        }

        [Fact]
        public async Task Should_Query_AppUser()
        {
            /* Need to manually start Unit Of Work because
             * FirstOrDefaultAsync should be executed while db connection / context is available.
             */
            await WithUnitOfWorkAsync(async () =>
            {
                //Act
                var adminUser = await _appUserRepository
                    .GetMongoQueryable()
                    .FirstOrDefaultAsync(u => u.UserName == "admin");

                //Assert
                adminUser.ShouldNotBeNull();
            });
        }
    }
}
