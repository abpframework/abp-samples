using System;
using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.RoleManagement.Steps
{
    [DisplayName("Create role")]
    public class CreateRoleScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var roleAppService = context.ServiceProvider.GetRequiredService<IIdentityRoleAppService>();

            var createdRole = await roleAppService.CreateAsync(new IdentityRoleCreateDto {Name = Guid.NewGuid().ToString("N")});
            context.Properties["CreatedRoleId"] = createdRole.Id;
        }
    }
}
