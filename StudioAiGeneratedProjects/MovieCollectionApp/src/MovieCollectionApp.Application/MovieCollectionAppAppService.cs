using MovieCollectionApp.Localization;
using Volo.Abp.Application.Services;

namespace MovieCollectionApp;

/* Inherit your application services from this class.
 */
public abstract class MovieCollectionAppAppService : ApplicationService
{
    protected MovieCollectionAppAppService()
    {
        LocalizationResource = typeof(MovieCollectionAppResource);
    }
}
