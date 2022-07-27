using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Ids2OpenId.Web;

[Dependency(ReplaceServices = true)]
public class Ids2OpenIdBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Ids2OpenId";
}
