using Volo.Abp.Settings;

namespace EShopOnAbp.CatalogService.Settings
{
    public class CatalogServiceSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(CatalogServiceSettings.MySetting1));
        }
    }
}
