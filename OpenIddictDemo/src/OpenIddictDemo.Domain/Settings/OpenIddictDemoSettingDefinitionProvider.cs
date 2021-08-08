using Volo.Abp.Settings;

namespace OpenIddictDemo.Settings
{
    public class OpenIddictDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(OpenIddictDemoSettings.MySetting1));
        }
    }
}
