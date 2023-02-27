using OpenId2Ids.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace OpenId2Ids.Web.Pages;

public abstract class OpenId2IdsPageModel : AbpPageModel
{
    protected OpenId2IdsPageModel()
    {
        LocalizationResourceType = typeof(OpenId2IdsResource);
    }
}
