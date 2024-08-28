using Volo.Abp.Settings;

namespace ModularCrm.Settings;

public class ModularCrmSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ModularCrmSettings.MySetting1));
    }
}
