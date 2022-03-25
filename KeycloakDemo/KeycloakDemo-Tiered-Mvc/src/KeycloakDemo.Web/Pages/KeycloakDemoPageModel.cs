using KeycloakDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace KeycloakDemo.Web.Pages;

public abstract class KeycloakDemoPageModel : AbpPageModel
{
    protected KeycloakDemoPageModel()
    {
        LocalizationResourceType = typeof(KeycloakDemoResource);
    }
}
