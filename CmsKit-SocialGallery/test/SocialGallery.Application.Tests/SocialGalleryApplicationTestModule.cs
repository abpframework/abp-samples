using Volo.Abp.Modularity;

namespace SocialGallery
{
    [DependsOn(
        typeof(SocialGalleryApplicationModule),
        typeof(SocialGalleryDomainTestModule)
        )]
    public class SocialGalleryApplicationTestModule : AbpModule
    {

    }
}