using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.UserManagement.Steps
{
    [DisplayName("Delete user")]
    public class DeleteUserScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var userAppService = context.ServiceProvider.GetRequiredService<IIdentityUserAppService>();

            var user = (IdentityUserDto) context.Properties["CreatedUser"];

            await userAppService.DeleteAsync(user.Id);
        }
    }
}