using ClientSimulationDemo.Simulator.Scenarios;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;
using Volo.ClientSimulation;

namespace ClientSimulationDemo.Simulator
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcUiBasicThemeModule),
        typeof(AbpAutofacModule),
        typeof(ClientSimulationWebModule)
        )]
    public class ClientSimulationDemoSimulatorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<ClientSimulationOptions>(options =>
            {
                options.Scenarios.Add(
                    new ScenarioConfiguration(
                        typeof(DemoScenario),
                        clientCount: 20
                    )
                );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseVirtualFiles();
            app.UseRouting();
            app.UseConfiguredEndpoints();
        }
    }
}
