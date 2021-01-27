using Volo.Abp.Settings;

namespace CustomNgAppWithIdentityServer.Settings
{
    public class CustomNgAppWithIdentityServerSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CustomNgAppWithIdentityServerSettings.MySetting1));
        }
    }
}
