using ModularCrm.Products.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ModularCrm.Products.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class ProductsPageModel : AbpPageModel
{
    protected ProductsPageModel()
    {
        LocalizationResourceType = typeof(ProductsResource);
        ObjectMapperContext = typeof(ProductsWebModule);
    }
}
