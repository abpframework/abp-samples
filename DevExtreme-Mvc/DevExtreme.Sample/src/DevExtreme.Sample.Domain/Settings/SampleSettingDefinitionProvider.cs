using Volo.Abp.Settings;

namespace DevExtreme.Sample.Settings
{
    public class SampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(SampleSettings.MySetting1));
        }
    }
}
