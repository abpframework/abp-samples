using Volo.Abp.Settings;

namespace Acme.BookStore.AngularMaterial.Settings
{
    public class AngularMaterialSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(AngularMaterialSettings.MySetting1));
        }
    }
}
