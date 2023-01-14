using Volo.Abp.Settings;

namespace TodoApp.Settings;

public class TodoAppSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TodoAppSettings.MySetting1));
    }
}
