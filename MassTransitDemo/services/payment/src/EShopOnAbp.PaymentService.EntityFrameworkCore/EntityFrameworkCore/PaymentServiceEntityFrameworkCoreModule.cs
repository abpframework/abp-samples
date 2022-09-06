using System;
using EShopOnAbp.PaymentService.PaymentRequests;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.PostgreSql;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PaymentService.EntityFrameworkCore
{
    [DependsOn(
        typeof(PaymentServiceDomainModule),
        typeof(AbpEntityFrameworkCorePostgreSqlModule)
        )]
    public class PaymentServiceEntityFrameworkCoreModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PaymentServiceEfCoreEntityExtensionMappings.Configure();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PaymentServiceDbContext>(options =>
            {
                options.AddRepository<PaymentRequest, EfCorePaymentRequestRepository>();
            });

            // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            Configure<AbpDbContextOptions>(options =>
            {
                /* The main point to change your DBMS.
                 * See also PaymentServiceMigrationsDbContextFactory for EF Core tooling. */
                options.UseNpgsql(b =>
                {
                    b.MigrationsHistoryTable("__PaymentService_Migrations");
                });
            });
        }
    }
}
