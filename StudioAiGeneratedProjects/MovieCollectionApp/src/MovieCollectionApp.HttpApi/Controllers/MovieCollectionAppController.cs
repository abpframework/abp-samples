using MovieCollectionApp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace MovieCollectionApp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class MovieCollectionAppController : AbpControllerBase
{
    protected MovieCollectionAppController()
    {
        LocalizationResource = typeof(MovieCollectionAppResource);
    }
}
