using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Azure;
using Volo.Abp.AzureServiceBus;
using Volo.Abp.Modularity;

namespace App1
{
    [DependsOn(
        typeof(AbpEventBusAzureModule),
        typeof(AbpAutofacModule)
        )]
    public class App1Module : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAzureEventBusOptions>(options =>
            {
                options.ConnectionName = "Default";
                options.SubscriberName = "MySubscriberName";
                options.TopicName = "MyTopicName";
            });

            Configure<AbpAzureServiceBusOptions>(options =>
            {
                options.Connections.Default.ConnectionString = "Endpoint=sb://testabp.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=koFvICQA43KZ0yLfPHg0yPujh47GhJZ9fLIfm/7ePqw=";
            });
        }
    }
}
