using Volo.Abp.Settings;

namespace ElsaDemo.Settings
{
    public class ElsaDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ElsaDemoSettings.MySetting1));
        }
    }
}
