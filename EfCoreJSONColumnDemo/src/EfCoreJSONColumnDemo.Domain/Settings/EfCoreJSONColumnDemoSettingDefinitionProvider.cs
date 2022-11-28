using Volo.Abp.Settings;

namespace EfCoreJSONColumnDemo.Settings;

public class EfCoreJSONColumnDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(EfCoreJSONColumnDemoSettings.MySetting1));
    }
}
