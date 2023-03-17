using Volo.Abp.Settings;

namespace PlugInSample.Settings;

public class PlugInSampleSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(PlugInSampleSettings.MySetting1));
    }
}
