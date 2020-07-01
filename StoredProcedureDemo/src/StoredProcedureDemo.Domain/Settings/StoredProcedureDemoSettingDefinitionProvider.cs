using Volo.Abp.Settings;

namespace StoredProcedureDemo.Settings
{
    public class StoredProcedureDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(StoredProcedureDemoSettings.MySetting1));
        }
    }
}
