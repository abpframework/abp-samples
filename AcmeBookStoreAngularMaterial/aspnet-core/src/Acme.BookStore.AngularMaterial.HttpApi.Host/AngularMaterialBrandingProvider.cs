using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Acme.BookStore.AngularMaterial
{
    [Dependency(ReplaceServices = true)]
    public class AngularMaterialBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "AngularMaterial";
    }
}
