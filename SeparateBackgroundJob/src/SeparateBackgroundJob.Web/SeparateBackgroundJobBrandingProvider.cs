using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace SeparateBackgroundJob.Web;

[Dependency(ReplaceServices = true)]
public class SeparateBackgroundJobBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SeparateBackgroundJob";
}
