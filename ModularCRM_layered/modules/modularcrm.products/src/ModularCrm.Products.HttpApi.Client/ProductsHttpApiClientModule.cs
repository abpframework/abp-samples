using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace ModularCrm.Products;

[DependsOn(
    typeof(ProductsApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class ProductsHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(ProductsApplicationContractsModule).Assembly,
            ProductsRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ProductsHttpApiClientModule>();
        });

    }
}
