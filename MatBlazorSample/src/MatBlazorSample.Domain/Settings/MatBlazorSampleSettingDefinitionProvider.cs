using Volo.Abp.Settings;

namespace MatBlazorSample.Settings
{
    public class MatBlazorSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(MatBlazorSampleSettings.MySetting1));
        }
    }
}
