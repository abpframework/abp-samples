using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.EventBus.Kafka;
using Volo.Abp.Kafka;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace DynamicDistributedEvents;

[DependsOn(
    typeof(AbpEventBusKafkaModule),
    typeof(SharedModule)
)]
public class KafkaModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpKafkaOptions>(options =>
        {
            options.Connections.Default.BootstrapServers = "localhost:9092";
        });

        Configure<AbpKafkaEventBusOptions>(options =>
        {
            options.TopicName = "DynamicDistEventsTopic";
            options.GroupId = "DynamicDistEvents";
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
