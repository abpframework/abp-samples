using ClientSimulationDemo.Simulator.Scenarios.RoleManagement;
using ClientSimulationDemo.Simulator.Scenarios.UserManagement;
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
        typeof(ClientSimulationWebModule),
        typeof(ClientSimulationDemoHttpApiClientModule)
        )]
    public class ClientSimulationDemoSimulatorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<ClientSimulationOptions>(options =>
            {
                options.Scenarios.Add(
                    new ScenarioConfiguration(
                        typeof(RoleManagementScenario),
                        clientCount: 50
                    )
                );

                options.Scenarios.Add(
                    new ScenarioConfiguration(
                        typeof(UserManagementScenario),
                        clientCount: 50
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

            app.UseStaticFiles();
            app.UseRouting();
            app.UseConfiguredEndpoints();
        }
    }
}
