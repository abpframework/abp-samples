using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Rebus.Transport.InMem;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.EventBus.Rebus;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace DynamicDistributedEvents;

[DependsOn(
    typeof(AbpEventBusRebusModule),
    typeof(SharedModule)
)]
public class RebusModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<AbpRebusEventBusOptions>(options =>
        {
            options.InputQueueName = "eventbus";
            options.Configurer = rebusConfigurer =>
            {
                rebusConfigurer.Transport(t => t.UseInMemoryTransport(new InMemNetwork(), "eventbus"));
            };
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
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
