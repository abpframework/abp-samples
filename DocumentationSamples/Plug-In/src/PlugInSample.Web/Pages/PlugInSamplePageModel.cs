using PlugInSample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PlugInSample.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class PlugInSamplePageModel : AbpPageModel
{
    protected PlugInSamplePageModel()
    {
        LocalizationResourceType = typeof(PlugInSampleResource);
    }
}
