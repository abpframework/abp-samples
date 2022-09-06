using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace EShopOnAbp.OrderingService
{
    [DependsOn(
        typeof(OrderingServiceApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class OrderingServiceHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Ordering";
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddStaticHttpClientProxies(
                typeof(OrderingServiceApplicationContractsModule).Assembly,
                RemoteServiceName
            );

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<OrderingServiceHttpApiClientModule>();
            });
        }
    }
}