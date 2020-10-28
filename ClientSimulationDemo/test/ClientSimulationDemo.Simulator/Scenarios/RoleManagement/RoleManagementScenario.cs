using System;
using System.ComponentModel;
using ClientSimulationDemo.Simulator.Scenarios.RoleManagement.Steps;
using Volo.Abp;
using Volo.ClientSimulation.Scenarios;

namespace ClientSimulationDemo.Simulator.Scenarios.RoleManagement
{
    [DisplayName("Roles")]
    public class RoleManagementScenario : Scenario
    {
        public RoleManagementScenario(IServiceProvider serviceProvider) :
            base(serviceProvider)
        {
            AddStep(new SleepScenarioStep("Wait 01", RandomHelper.GetRandom(1000, 10000)));
            AddStep(new GetRoleListScenarioStep());
            AddStep(new SleepScenarioStep("Wait 02", RandomHelper.GetRandom(1000, 2000)));
            AddStep(new CreateRoleScenarioStep());
            AddStep(new SleepScenarioStep("Wait 03", RandomHelper.GetRandom(1000, 2000)));
            AddStep(new DeleteRoleScenarioStep());
        }
    }
}
