using SocialGallery.MongoDB;
using Volo.Abp.Modularity;

namespace SocialGallery
{
    [DependsOn(
        typeof(SocialGalleryMongoDbTestModule)
        )]
    public class SocialGalleryDomainTestModule : AbpModule
    {

    }
}