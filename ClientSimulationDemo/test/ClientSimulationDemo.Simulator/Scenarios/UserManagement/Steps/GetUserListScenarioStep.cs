using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.UserManagement.Steps
{
    [DisplayName("Get users")]
    public class GetUserListScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var userAppService = context.ServiceProvider.GetRequiredService<IIdentityUserAppService>();

            await userAppService.GetListAsync(new GetIdentityUsersInput {MaxResultCount = 10});
        }
    }
}
