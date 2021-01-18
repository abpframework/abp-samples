using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Kafka;
using Volo.Abp.Kafka;
using Volo.Abp.Modularity;

namespace App1
{
    [DependsOn(
        typeof(AbpEventBusKafkaModule),
        typeof(AbpAutofacModule)
        )]
    public class App1Module : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpKafkaOptions>(options =>
            {
                options.Connections.Default.BootstrapServers = "127.0.0.1:9092";
            });

            Configure<AbpKafkaEventBusOptions>(options =>
            {
                options.GroupId = "MyGroupId1";
                options.TopicName = "MyTopicName";
            });
        }
    }
}
