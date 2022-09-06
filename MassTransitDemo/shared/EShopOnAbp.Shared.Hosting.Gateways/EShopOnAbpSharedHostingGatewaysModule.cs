using EShopOnAbp.Shared.Hosting.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace EShopOnAbp.Shared.Hosting.Gateways
{
    [DependsOn(
        typeof(EShopOnAbpSharedHostingAspNetCoreModule)
    )]
    public class EShopOnAbpSharedHostingGatewaysModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            
            context.Services.AddReverseProxy()
                .LoadFromConfig(configuration.GetSection("ReverseProxy"));
        }
    }
}