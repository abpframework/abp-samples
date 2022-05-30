using Volo.Abp.Settings;

namespace ConcurrentLogin.Settings;

public class ConcurrentLoginSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ConcurrentLoginSettings.MySetting1));
    }
}
