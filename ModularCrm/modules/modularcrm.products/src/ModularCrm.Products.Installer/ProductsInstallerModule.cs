using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace ModularCrm.Products;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
    )]
public class ProductsInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ProductsInstallerModule>();
        });
    }
}
