using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace GrpcDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class GrpcDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "GrpcDemo";
    }
}
