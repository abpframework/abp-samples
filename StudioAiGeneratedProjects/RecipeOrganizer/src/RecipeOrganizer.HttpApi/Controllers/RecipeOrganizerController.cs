using RecipeOrganizer.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace RecipeOrganizer.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class RecipeOrganizerController : AbpControllerBase
{
    protected RecipeOrganizerController()
    {
        LocalizationResource = typeof(RecipeOrganizerResource);
    }
}
