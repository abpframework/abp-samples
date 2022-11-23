using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace OutputCachingMiddleware.Web;

[Dependency(ReplaceServices = true)]
public class OutputCachingMiddlewareBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "OutputCachingMiddleware";
}
