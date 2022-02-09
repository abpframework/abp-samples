using Volo.Abp.Settings;

namespace TelerikBlazorSample.Settings;

public class TelerikBlazorSampleSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TelerikBlazorSampleSettings.MySetting1));
    }
}
