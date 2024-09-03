using AspirationalAbp.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace AspirationalAbp.Web.Pages;

public abstract class AspirationalAbpPageModel : AbpPageModel
{
    protected AspirationalAbpPageModel()
    {
        LocalizationResourceType = typeof(AspirationalAbpResource);
    }
}
