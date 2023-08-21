using SwaggerDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SwaggerDemo.Web.Pages;

public abstract class SwaggerDemoPageModel : AbpPageModel
{
    protected SwaggerDemoPageModel()
    {
        LocalizationResourceType = typeof(SwaggerDemoResource);
    }
}
