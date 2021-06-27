using Volo.Abp.Settings;

namespace UnifiedContextsDemo.Settings
{
    public class UnifiedContextsDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(UnifiedContextsDemoSettings.MySetting1));
        }
    }
}
