using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.RoleManagement.Steps
{
    [DisplayName("Get roles")]
    public class GetRoleListScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var roleAppService = context.ServiceProvider.GetRequiredService<IIdentityRoleAppService>();

            await roleAppService.GetListAsync(new GetIdentityRolesInput { MaxResultCount = 10 });
        }
    }
}
