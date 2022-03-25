using Volo.Abp.Settings;

namespace KeycloakDemo.Settings;

public class KeycloakDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(KeycloakDemoSettings.MySetting1));
    }
}
