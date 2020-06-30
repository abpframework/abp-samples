using Volo.Abp.Settings;

namespace OrganizationUnitSample.Settings
{
    public class OrganizationUnitSampleSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(OrganizationUnitSampleSettings.MySetting1));
        }
    }
}
