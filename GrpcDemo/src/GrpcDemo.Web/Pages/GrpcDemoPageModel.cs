using GrpcDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace GrpcDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class GrpcDemoPageModel : AbpPageModel
    {
        protected GrpcDemoPageModel()
        {
            LocalizationResourceType = typeof(GrpcDemoResource);
        }
    }
}