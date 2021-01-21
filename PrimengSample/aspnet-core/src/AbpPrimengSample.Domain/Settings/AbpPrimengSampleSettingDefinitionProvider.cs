using Volo.Abp.Settings;

namespace AbpPrimengSample.Settings
{
    public class AbpPrimengSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(AbpPrimengSampleSettings.MySetting1));
        }
    }
}
