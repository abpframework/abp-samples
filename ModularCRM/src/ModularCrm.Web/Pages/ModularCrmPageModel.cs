using ModularCrm.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ModularCrm.Web.Pages;

public abstract class ModularCrmPageModel : AbpPageModel
{
    protected ModularCrmPageModel()
    {
        LocalizationResourceType = typeof(ModularCrmResource);
    }
}
