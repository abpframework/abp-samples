using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace TemplateReplace.Web
{
    [Dependency(ReplaceServices = true)]
    public class TemplateReplaceBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "TemplateReplace";
    }
}
