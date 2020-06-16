using Volo.Abp.Settings;

namespace CustomApplicationModules.Settings
{
    public class CustomApplicationModulesSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CustomApplicationModulesSettings.MySetting1));
        }
    }
}
