using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace TelerikBlazorSample;

[Dependency(ReplaceServices = true)]
public class TelerikBlazorSampleBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "TelerikBlazorSample";
}
