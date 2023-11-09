using Volo.Abp.Settings;

namespace InterceptionSampleMongoApp.Settings;

public class InterceptionSampleMongoAppSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(InterceptionSampleMongoAppSettings.MySetting1));
    }
}
