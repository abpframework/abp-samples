using Volo.Abp.Settings;

namespace DevExtremeAngular.Settings
{
    public class DevExtremeAngularSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DevExtremeAngularSettings.MySetting1));
        }
    }
}
