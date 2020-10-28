using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Rebus;
using Volo.Abp.Modularity;

namespace App2
{
    [DependsOn(
        typeof(AbpEventBusRebusModule),
        typeof(AbpAutofacModule)
        )]
    public class App2Module : AbpModule
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
