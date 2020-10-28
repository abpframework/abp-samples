using System;
using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.UserManagement.Steps
{
    [DisplayName("Update user")]
    public class UpdateUserScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var userAppService = context.ServiceProvider.GetRequiredService<IIdentityUserAppService>();

            var user = (IdentityUserDto) context.Properties["CreatedUser"];

            await userAppService.UpdateAsync(
                user.Id,
                new IdentityUserUpdateDto
                {
                    Name = Guid.NewGuid().ToString("N"),
                    Surname = Guid.NewGuid().ToString("N"),
                    Email = user.Email,
                    UserName = user.UserName,
                    ConcurrencyStamp = user.ConcurrencyStamp
                }
            );
        }
    }
}
