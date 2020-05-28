using Volo.Abp.Settings;

namespace SignalRTieredDemo.Settings
{
    public class SignalRTieredDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(SignalRTieredDemoSettings.MySetting1));
        }
    }
}
