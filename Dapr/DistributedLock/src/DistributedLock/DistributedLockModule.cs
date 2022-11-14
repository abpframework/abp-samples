using Volo.Abp.Autofac;
using Volo.Abp.Dapr;
using Volo.Abp.Modularity;
using Volo.Abp.DistributedLocking.Dapr;

namespace DistributedLock;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpDistributedLockingDaprModule)
)]
public class DistributedLockModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDaprOptions>(options =>
        {
            options.GrpcEndpoint = "http://localhost:7003";
            options.HttpEndpoint = "http://localhost:7001";
        });
        
        Configure<AbpDistributedLockDaprOptions>(options =>
        {
            options.StoreName = "redislock";
        });
    }
}
