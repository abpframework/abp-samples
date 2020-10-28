using Rebus.Config;
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
                options.Configurer = configure =>
                {
                    configure.Transport(x => x.UseRabbitMq("amqp://user:bitnami@192.168.0.3", "eventbus"));
                };

                options.InputQueueName = "eventbus";
            });
        }
    }
}
