using Ids2OpenId.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Ids2OpenId.Web.Pages;

public abstract class Ids2OpenIdPageModel : AbpPageModel
{
    protected Ids2OpenIdPageModel()
    {
        LocalizationResourceType = typeof(Ids2OpenIdResource);
    }
}
