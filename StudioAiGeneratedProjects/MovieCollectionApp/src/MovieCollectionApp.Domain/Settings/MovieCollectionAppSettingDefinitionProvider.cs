using Volo.Abp.Settings;

namespace MovieCollectionApp.Settings;

public class MovieCollectionAppSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(MovieCollectionAppSettings.MySetting1));
    }
}
