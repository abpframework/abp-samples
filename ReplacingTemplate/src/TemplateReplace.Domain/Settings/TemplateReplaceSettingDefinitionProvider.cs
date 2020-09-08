using Volo.Abp.Settings;

namespace TemplateReplace.Settings
{
    public class TemplateReplaceSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(TemplateReplaceSettings.MySetting1));
        }
    }
}
