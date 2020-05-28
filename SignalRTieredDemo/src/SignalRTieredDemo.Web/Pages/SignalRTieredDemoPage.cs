using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using SignalRTieredDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SignalRTieredDemo.Web.Pages
{
    public abstract class SignalRTieredDemoPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<SignalRTieredDemoResource> L { get; set; }
    }
}
