using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace IDSReferenceToken
{
    [Dependency(ReplaceServices = true)]
    public class IDSReferenceTokenBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "IDSReferenceToken";
    }
}
