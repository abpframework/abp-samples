using Microsoft.Extensions.DependencyInjection;
using Polly;
using System;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace EShopOnAbp.CatalogService.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(CatalogServiceHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CatalogServiceConsoleApiClientModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<AbpHttpClientBuilderOptions>(options =>
            {
                options.ProxyClientBuildActions.Add((remoteServiceName, clientBuilder) =>
                {
                    clientBuilder.AddTransientHttpErrorPolicy(
                        policyBuilder => policyBuilder.WaitAndRetryAsync(3, i => TimeSpan.FromSeconds(Math.Pow(2, i)))
                    );
                });
            });
        }
    }
}
