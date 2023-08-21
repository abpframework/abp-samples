using Volo.Abp.Settings;

namespace SwaggerDemo.Settings;

public class SwaggerDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(SwaggerDemoSettings.MySetting1));
    }
}
