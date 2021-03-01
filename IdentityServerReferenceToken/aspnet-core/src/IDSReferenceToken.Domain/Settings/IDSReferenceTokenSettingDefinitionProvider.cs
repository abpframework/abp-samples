using Volo.Abp.Settings;

namespace IDSReferenceToken.Settings
{
    public class IDSReferenceTokenSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(IDSReferenceTokenSettings.MySetting1));
        }
    }
}
