using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AzureServiceBus;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EventBus.Azure;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace DynamicDistributedEvents;

[DependsOn(
    typeof(AbpEventBusAzureModule),
    typeof(SharedModule)
)]
public class AzureModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpAzureServiceBusOptions>(options =>
        {
            // TODO: Replace with your Azure Service Bus connection string
            options.Connections.Default.ConnectionString = "your-azure-service-bus-connection-string";
        });

        Configure<AbpAzureEventBusOptions>(options =>
        {
            options.SubscriberName = "DynamicDistEventsSubscriber";
            options.TopicName = "DynamicDistEventsTopic";
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
