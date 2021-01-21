using Volo.Abp.Settings;

namespace ExcelIO.Settings
{
    public class ExcelIOSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ExcelIOSettings.MySetting1));
        }
    }
}
