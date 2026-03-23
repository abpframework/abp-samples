using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.EventBus.RabbitMq;
using Volo.Abp.Modularity;
using Volo.Abp.RabbitMQ;
using Volo.Abp.Uow;

namespace DynamicDistributedEvents;

[DependsOn(
    typeof(AbpEventBusRabbitMqModule),
    typeof(SharedModule)
)]
public class RabbitMqModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpRabbitMqOptions>(options =>
        {
            options.Connections.Default.HostName = "localhost";
        });

        Configure<AbpRabbitMqEventBusOptions>(options =>
        {
            options.ClientName = "DynamicDistEvents";
            options.ExchangeName = "DynamicDistEvents";
        });

        Configure<AbpDbContextOptions>(options =>
        {
            options.UseSqlServer();
        });

        Configure<AbpDistributedEventBusOptions>(options =>
        {
            options.Outboxes.Configure(config =>
            {
                config.UseDbContext<DynamicEventsDbContext>();
            });

        });
    }

    public override async Task OnApplicationInitializationAsync(ApplicationInitializationContext context)
    {
        // Ensure database and outbox/inbox tables exist
        var uowManager = context.ServiceProvider.GetRequiredService<IUnitOfWorkManager>();
        using (var uow = uowManager.Begin())
        {
            var dbContext = await context.ServiceProvider
                .GetRequiredService<IDbContextProvider<DynamicEventsDbContext>>()
                .GetDbContextAsync();
            await dbContext.Database.EnsureCreatedAsync();
            await uow.CompleteAsync();
        }

        var runner = context.ServiceProvider.GetRequiredService<DynamicEventScenarioRunner>();

        await runner.RunAsync();
        await runner.RunWithOutboxAsync();
    }
}
