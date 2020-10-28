using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Rebus;
using Volo.Abp.Modularity;

namespace App1
{
    [DependsOn(
        typeof(AbpEventBusRebusModule),
        typeof(AbpAutofacModule)
        )]
    public class App1Module : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<AbpRebusEventBusOptions>(options =>
            {
                options.InputQueueName = "eventbus";
            });
        }
    }
}
