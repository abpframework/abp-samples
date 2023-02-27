using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace OpenId2Ids;

[Dependency(ReplaceServices = true)]
public class OpenId2IdsBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "OpenId2Ids";
}
