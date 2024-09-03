using Volo.Abp.Settings;

namespace AspirationalAbp.Settings;

public class AspirationalAbpSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(AspirationalAbpSettings.MySetting1));
    }
}
