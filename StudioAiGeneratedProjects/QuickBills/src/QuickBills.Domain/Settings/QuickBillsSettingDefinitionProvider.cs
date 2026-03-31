using Volo.Abp.Settings;

namespace QuickBills.Settings;

public class QuickBillsSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(QuickBillsSettings.MySetting1));
    }
}
