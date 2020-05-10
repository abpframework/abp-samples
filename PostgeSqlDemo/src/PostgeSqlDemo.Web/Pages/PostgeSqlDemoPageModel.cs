using PostgeSqlDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PostgeSqlDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class PostgeSqlDemoPageModel : AbpPageModel
    {
        protected PostgeSqlDemoPageModel()
        {
            LocalizationResourceType = typeof(PostgeSqlDemoResource);
        }
    }
}