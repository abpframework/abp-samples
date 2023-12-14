using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SignalRDemoBlazorUi.Blazor;

[Dependency(ReplaceServices = true)]
public class SignalRDemoBlazorUiBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SignalRDemoBlazorUi";
}
