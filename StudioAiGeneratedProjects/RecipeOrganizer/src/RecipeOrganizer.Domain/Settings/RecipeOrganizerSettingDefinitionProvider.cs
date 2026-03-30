using Volo.Abp.Settings;

namespace RecipeOrganizer.Settings;

public class RecipeOrganizerSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(RecipeOrganizerSettings.MySetting1));
    }
}
