using RecipeOrganizer.Localization;
using Volo.Abp.AspNetCore.Components;

namespace RecipeOrganizer.Blazor.Client;

public abstract class RecipeOrganizerComponentBase : AbpComponentBase
{
    protected RecipeOrganizerComponentBase()
    {
        LocalizationResource = typeof(RecipeOrganizerResource);
    }
}
