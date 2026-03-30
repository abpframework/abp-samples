using RecipeOrganizer.Localization;
using Volo.Abp.Application.Services;

namespace RecipeOrganizer;

/* Inherit your application services from this class.
 */
public abstract class RecipeOrganizerAppService : ApplicationService
{
    protected RecipeOrganizerAppService()
    {
        LocalizationResource = typeof(RecipeOrganizerResource);
    }
}
