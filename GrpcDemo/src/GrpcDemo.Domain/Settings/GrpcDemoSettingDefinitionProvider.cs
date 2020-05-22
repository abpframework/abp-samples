using Volo.Abp.Settings;

namespace GrpcDemo.Settings
{
    public class GrpcDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(GrpcDemoSettings.MySetting1));
        }
    }
}
