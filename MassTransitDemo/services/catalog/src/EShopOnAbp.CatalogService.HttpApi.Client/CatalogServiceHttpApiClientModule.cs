using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace EShopOnAbp.CatalogService
{
    [DependsOn(
        typeof(CatalogServiceApplicationContractsModule),
        typeof(AbpHttpClientModule)
    )]
    public class CatalogServiceHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Catalog";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddStaticHttpClientProxies(
                typeof(CatalogServiceApplicationContractsModule).Assembly,
                RemoteServiceName
            );

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CatalogServiceHttpApiClientModule>();
            });
        }
    }
}
