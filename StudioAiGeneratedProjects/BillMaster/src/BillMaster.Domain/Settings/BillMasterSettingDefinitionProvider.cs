using Volo.Abp.Settings;

namespace BillMaster.Settings;

public class BillMasterSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(BillMasterSettings.MySetting1));
    }
}
