using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace GrpcDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class GrpcDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "GrpcDemo";
    }
}
