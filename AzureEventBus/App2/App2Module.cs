using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Azure;
using Volo.Abp.AzureServiceBus;
using Volo.Abp.Modularity;

namespace App2
{
    [DependsOn(
        typeof(AbpEventBusAzureModule),
        typeof(AbpAutofacModule)
        )]
    public class App2Module : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAzureEventBusOptions>(options =>
            {
                options.ConnectionName = "Default";
                options.SubscriberName = "MySubscriberName2";
                options.TopicName = "MyTopicName";
            });

            Configure<AbpAzureServiceBusOptions>(options =>
            {
                options.Connections.Default.ConnectionString = "<azure servies bus connection string>";
            });
        }
    }
}
