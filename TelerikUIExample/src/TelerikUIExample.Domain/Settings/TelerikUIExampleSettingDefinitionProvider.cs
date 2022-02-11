using Volo.Abp.Settings;

namespace TelerikUIExample.Settings;

public class TelerikUIExampleSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TelerikUIExampleSettings.MySetting1));
    }
}
