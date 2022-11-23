using Volo.Abp.Settings;

namespace OutputCachingMiddleware.Settings;

public class OutputCachingMiddlewareSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(OutputCachingMiddlewareSettings.MySetting1));
    }
}
