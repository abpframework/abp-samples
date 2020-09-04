using Volo.Abp.Autofac;
using Volo.Abp.EventBus.Kafka;
using Volo.Abp.Kafka;
using Volo.Abp.Modularity;

namespace App2
{
    [DependsOn(
        typeof(AbpEventBusKafkaModule),
        typeof(AbpAutofacModule)
        )]
    public class App2Module : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpKafkaOptions>(options =>
            {
                options.Connections.Default.BootstrapServers = "192.168.0.3:9093";
            });

            Configure<AbpKafkaEventBusOptions>(options =>
            {
                options.GroupId = "MyGroupId";
                options.TopicName = "MyTopicName";
            });
        }
    }
}
