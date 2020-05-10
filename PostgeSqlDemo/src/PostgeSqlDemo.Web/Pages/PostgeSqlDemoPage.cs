using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using PostgeSqlDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PostgeSqlDemo.Web.Pages
{
    /* Inherit your UI Pages from this class. To do that, add this line to your Pages (.cshtml files under the Page folder):
     * @inherits PostgeSqlDemo.Web.Pages.PostgeSqlDemoPage
     */
    public abstract class PostgeSqlDemoPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<PostgeSqlDemoResource> L { get; set; }
    }
}
