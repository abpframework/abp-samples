using Volo.Abp.Modularity;

namespace IDSReferenceToken
{
    [DependsOn(
        typeof(IDSReferenceTokenApplicationModule),
        typeof(IDSReferenceTokenDomainTestModule)
        )]
    public class IDSReferenceTokenApplicationTestModule : AbpModule
    {

    }
}