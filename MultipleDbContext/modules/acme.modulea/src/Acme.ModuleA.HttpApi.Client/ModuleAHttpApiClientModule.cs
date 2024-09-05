using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Acme.ModuleA;

[DependsOn(
    typeof(ModuleAApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class ModuleAHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(ModuleAApplicationContractsModule).Assembly,
            ModuleARemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ModuleAHttpApiClientModule>();
        });

    }
}
