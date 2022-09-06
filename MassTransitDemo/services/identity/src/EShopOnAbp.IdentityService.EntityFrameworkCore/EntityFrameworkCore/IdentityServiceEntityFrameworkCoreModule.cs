using System;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.PostgreSql;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService.EntityFrameworkCore
{
    [DependsOn(
        typeof(IdentityServiceDomainModule),
        typeof(AbpEntityFrameworkCorePostgreSqlModule),
        typeof(AbpIdentityEntityFrameworkCoreModule),
        typeof(AbpIdentityServerEntityFrameworkCoreModule)
    )]
    public class IdentityServiceEntityFrameworkCoreModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            IdentityServiceEfCoreEntityExtensionMappings.Configure();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<IdentityServiceDbContext>(options =>
            {
                options.ReplaceDbContext<IIdentityDbContext>();
                options.ReplaceDbContext<IIdentityServerDbContext>();

                options.AddDefaultRepositories(includeAllEntities: true);
            });

            // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            Configure<AbpDbContextOptions>(options =>
            {
                options.Configure<IdentityServiceDbContext>(c =>
                {
                    c.UseNpgsql(b => { b.MigrationsHistoryTable("__IdentityService_Migrations"); });
                });
            });
        }
    }
}