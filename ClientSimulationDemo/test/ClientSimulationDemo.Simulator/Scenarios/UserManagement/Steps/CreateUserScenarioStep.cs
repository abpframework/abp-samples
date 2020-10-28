using System;
using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Identity;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.UserManagement.Steps
{
    [DisplayName("Create user")]
    public class CreateUserScenarioStep : ScenarioStep
    {
        protected override async Task ExecuteAsync(ScenarioExecutionContext context)
        {
            var userAppService = context.ServiceProvider.GetRequiredService<IIdentityUserAppService>();

            var createdUser = await userAppService.CreateAsync(
                new IdentityUserCreateDto
                {
                    Name = Guid.NewGuid().ToString("N"),
                    Surname = Guid.NewGuid().ToString("N"),
                    Email = Guid.NewGuid().ToString("N") + "@abp.io",
                    Password = "1q2w3E*",
                    UserName = Guid.NewGuid().ToString("N")
                }
            );
            context.Properties["CreatedUser"] = createdUser;
        }
    }
}
