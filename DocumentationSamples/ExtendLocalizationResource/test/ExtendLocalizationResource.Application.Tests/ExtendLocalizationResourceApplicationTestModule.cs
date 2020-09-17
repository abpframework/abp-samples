using Volo.Abp.Modularity;

namespace ExtendLocalizationResource
{
    [DependsOn(
        typeof(ExtendLocalizationResourceApplicationModule),
        typeof(ExtendLocalizationResourceDomainTestModule)
        )]
    public class ExtendLocalizationResourceApplicationTestModule : AbpModule
    {

    }
}