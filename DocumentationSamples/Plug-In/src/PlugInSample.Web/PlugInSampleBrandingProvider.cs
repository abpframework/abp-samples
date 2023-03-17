using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace PlugInSample.Web;

[Dependency(ReplaceServices = true)]
public class PlugInSampleBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "PlugInSample";
}
