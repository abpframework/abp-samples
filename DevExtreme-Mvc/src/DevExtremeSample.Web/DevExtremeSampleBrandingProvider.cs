using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace DevExtremeSample.Web
{
    [Dependency(ReplaceServices = true)]
    public class DevExtremeSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DevExtremeSample";
    }
}
