using Volo.Abp.Settings;

namespace SignalRDemo.Settings
{
    public class SignalRDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(SignalRDemoSettings.MySetting1));
        }
    }
}
