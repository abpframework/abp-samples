using Volo.Abp.Settings;

namespace Acme.DemoCenterApp.Settings;

public class DemoCenterAppSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(DemoCenterAppSettings.MySetting1));
    }
}
