using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SignalRDemoBlazorUi;

[Dependency(ReplaceServices = true)]
public class SignalRDemoBlazorUiBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SignalRDemoBlazorUi";
}
