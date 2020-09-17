using ExtendLocalizationResource.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ExtendLocalizationResource
{
    [DependsOn(
        typeof(ExtendLocalizationResourceEntityFrameworkCoreTestModule)
        )]
    public class ExtendLocalizationResourceDomainTestModule : AbpModule
    {

    }
}