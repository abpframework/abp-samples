using System;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.PostgreSql;
using Volo.Abp.Modularity;

namespace EShopOnAbp.OrderingService.EntityFrameworkCore
{
    [DependsOn(
        typeof(OrderingServiceDomainModule),
        typeof(AbpEntityFrameworkCorePostgreSqlModule)
        )]
    public class OrderingServiceEntityFrameworkCoreModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            OrderingServiceEfCoreEntityExtensionMappings.Configure();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<OrderingServiceDbContext>(options =>
            {
                /* Remove "includeAllEntities: true" to create
                 * default repositories only for aggregate roots */
                options.AddDefaultRepositories(includeAllEntities: true);
            });

            // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            Configure<AbpDbContextOptions>(options =>
            {
                /* The main point to change your DBMS.
                 * See also OrderingServiceMigrationsDbContextFactory for EF Core tooling. */
                options.UseNpgsql(b =>
                {
                    b.MigrationsHistoryTable("__OrderingService_Migrations");
                });
            });
        }
    }
}
