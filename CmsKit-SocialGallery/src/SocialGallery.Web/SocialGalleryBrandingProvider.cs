using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace SocialGallery.Web
{
    [Dependency(ReplaceServices = true)]
    public class SocialGalleryBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SocialGallery";
    }
}
