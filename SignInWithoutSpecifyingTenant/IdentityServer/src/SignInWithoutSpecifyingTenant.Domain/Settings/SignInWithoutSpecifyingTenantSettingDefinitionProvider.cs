using Volo.Abp.Settings;

namespace SignInWithoutSpecifyingTenant.Settings
{
    public class SignInWithoutSpecifyingTenantSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(SignInWithoutSpecifyingTenantSettings.MySetting1));
        }
    }
}
