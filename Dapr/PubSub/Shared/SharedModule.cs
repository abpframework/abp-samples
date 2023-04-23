using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.BackgroundWorkers;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EntityFrameworkCore.Sqlite;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace Shared;

[DependsOn(typeof(AbpEntityFrameworkCoreSqliteModule), typeof(AbpBackgroundWorkersModule))]
public class SharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<MyDbContext>();

        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = "Data Source=/Users/maliming/Github/abp-samples/Dapr/PubSub/Shared/dapr.db";
        });

        Configure<AbpDbContextOptions>(options =>
        {
            options.UseSqlite();
        });

        Configure<AbpUnitOfWorkDefaultOptions>(options =>
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
        });

        Configure<AbpDistributedEventBusOptions>(options =>
        {
            options.Outboxes.Configure(config =>
            {
                config.UseDbContext<MyDbContext>();
            });

            options.Inboxes.Configure(config =>
            {
                config.UseDbContext<MyDbContext>();
            });
        });
    }
}
