using System;
using System.ComponentModel;
using ClientSimulationDemo.Simulator.Scenarios.UserManagement.Steps;
using Volo.Abp;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.UserManagement
{
    [DisplayName("Users")]
    public class UserManagementScenario : Scenario
    {
        public UserManagementScenario(IServiceProvider serviceProvider) :
            base(serviceProvider)
        {
            AddStep(new SleepScenarioStep("Wait 01", RandomHelper.GetRandom(1000, 10000)));
            AddStep(new GetUserListScenarioStep());
            AddStep(new SleepScenarioStep("Wait 02", RandomHelper.GetRandom(1000, 2000)));
            AddStep(new CreateUserScenarioStep());
            AddStep(new SleepScenarioStep("Wait 03", RandomHelper.GetRandom(1000, 2000)));
            AddStep(new UpdateUserScenarioStep());
            AddStep(new SleepScenarioStep("Wait 04", RandomHelper.GetRandom(1000, 2000)));
            AddStep(new DeleteUserScenarioStep());
        }
    }
}
