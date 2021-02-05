using Volo.Abp.Settings;

namespace CustomAngularAppWithIdentityServer.Settings
{
    public class CustomAngularAppWithIdentityServerSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CustomAngularAppWithIdentityServerSettings.MySetting1));
        }
    }
}
