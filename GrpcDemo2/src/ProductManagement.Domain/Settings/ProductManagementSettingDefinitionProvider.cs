using Volo.Abp.Settings;

namespace ProductManagement.Settings;

public class ProductManagementSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ProductManagementSettings.MySetting1));
    }
}
