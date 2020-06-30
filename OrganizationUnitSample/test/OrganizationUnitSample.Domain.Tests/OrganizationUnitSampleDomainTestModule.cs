using Microsoft.Extensions.DependencyInjection;
using OrganizationUnitSample.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.Threading;

namespace OrganizationUnitSample
{
    [DependsOn(
        typeof(OrganizationUnitSampleEntityFrameworkCoreTestModule)
        )]
    public class OrganizationUnitSampleDomainTestModule : AbpModule
    {
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            SeedTestData(context);
        }

        private static void SeedTestData(ApplicationInitializationContext context)
        {
            using (var scope = context.ServiceProvider.CreateScope())
            {
                AsyncHelper.RunSync(() => scope.ServiceProvider
                    .GetRequiredService<TestOrganizationUnitDataBuilder>()
                    .Build());
            }
        }
    }
}
