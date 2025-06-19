using ModularCrm.Catalog.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ModularCrm.Catalog.UI.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class CatalogPageModel : AbpPageModel
{
    protected CatalogPageModel()
    {
        LocalizationResourceType = typeof(CatalogResource);
        ObjectMapperContext = typeof(CatalogWebModule);
    }
}
