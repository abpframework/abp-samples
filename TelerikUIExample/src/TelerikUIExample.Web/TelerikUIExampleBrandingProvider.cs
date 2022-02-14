using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace TelerikUIExample.Web;

[Dependency(ReplaceServices = true)]
public class TelerikUIExampleBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "TelerikUIExample";
}
