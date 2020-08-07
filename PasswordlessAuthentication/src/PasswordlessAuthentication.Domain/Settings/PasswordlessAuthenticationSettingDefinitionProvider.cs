using Volo.Abp.Settings;

namespace PasswordlessAuthentication.Settings
{
    public class PasswordlessAuthenticationSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(PasswordlessAuthenticationSettings.MySetting1));
        }
    }
}
