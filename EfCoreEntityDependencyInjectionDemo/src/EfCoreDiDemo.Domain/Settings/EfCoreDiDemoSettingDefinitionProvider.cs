using Volo.Abp.Settings;

namespace EfCoreDiDemo.Settings;

public class EfCoreDiDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(EfCoreDiDemoSettings.MySetting1));
    }
}
