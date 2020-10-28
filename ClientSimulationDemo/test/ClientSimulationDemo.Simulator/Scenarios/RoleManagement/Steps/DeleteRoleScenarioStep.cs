using System;
using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.RoleManagement.Steps
{
    [DisplayName("Delete role")]
    public class DeleteRoleScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var roleAppService = context.ServiceProvider.GetRequiredService<IIdentityRoleAppService>();

            await roleAppService.DeleteAsync((Guid) context.Properties["CreatedRoleId"]);
        }
    }
}
