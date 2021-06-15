using Volo.Abp.Settings;

namespace ConcurrencyDemo.Settings
{
    public class ConcurrencyDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ConcurrencyDemoSettings.MySetting1));
        }
    }
}
