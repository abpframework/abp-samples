using Volo.Abp.Settings;

namespace EfCoreGuardedTypeDemo.Settings;

public class EfCoreGuardedTypeDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(EfCoreGuardedTypeDemoSettings.MySetting1));
    }
}
