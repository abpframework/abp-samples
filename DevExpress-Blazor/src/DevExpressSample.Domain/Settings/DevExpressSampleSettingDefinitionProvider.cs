using Volo.Abp.Settings;

namespace DevExpressSample.Settings
{
    public class DevExpressSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DevExpressSampleSettings.MySetting1));
        }
    }
}
