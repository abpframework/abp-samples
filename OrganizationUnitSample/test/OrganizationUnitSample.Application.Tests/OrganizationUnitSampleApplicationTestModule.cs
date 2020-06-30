using Volo.Abp.Modularity;

namespace OrganizationUnitSample
{
    [DependsOn(
        typeof(OrganizationUnitSampleApplicationModule),
        typeof(OrganizationUnitSampleDomainTestModule)
        )]
    public class OrganizationUnitSampleApplicationTestModule : AbpModule
    {

    }
}