using Volo.Abp.Settings;

namespace ClientSimulationDemo.Settings
{
    public class ClientSimulationDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ClientSimulationDemoSettings.MySetting1));
        }
    }
}
