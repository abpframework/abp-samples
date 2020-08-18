using Volo.Abp.Settings;

namespace DevExtremeSample.Settings
{
    public class DevExtremeSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DevExtremeSampleSettings.MySetting1));
        }
    }
}
