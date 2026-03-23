using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Autofac;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EventBus;
using Volo.Abp.Modularity;

namespace DynamicDistributedEvents;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpEventBusModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class SharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<DynamicEventsDbContext>();
    }
}
