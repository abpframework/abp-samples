using OpenIddictDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace OpenIddictDemo.Web.Pages
{
    public abstract class OpenIddictDemoPageModel : AbpPageModel
    {
        protected OpenIddictDemoPageModel()
        {
            LocalizationResourceType = typeof(OpenIddictDemoResource);
        }
    }
}