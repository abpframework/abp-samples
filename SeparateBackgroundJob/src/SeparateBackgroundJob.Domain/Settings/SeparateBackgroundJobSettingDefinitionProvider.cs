using Volo.Abp.Settings;

namespace SeparateBackgroundJob.Settings;

public class SeparateBackgroundJobSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(SeparateBackgroundJobSettings.MySetting1));
    }
}
