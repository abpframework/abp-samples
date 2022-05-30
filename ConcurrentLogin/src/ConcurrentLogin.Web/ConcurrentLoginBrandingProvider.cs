using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ConcurrentLogin.Web;

[Dependency(ReplaceServices = true)]
public class ConcurrentLoginBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "ConcurrentLogin";
}
