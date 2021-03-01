using IDSReferenceToken.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace IDSReferenceToken
{
    [DependsOn(
        typeof(IDSReferenceTokenEntityFrameworkCoreTestModule)
        )]
    public class IDSReferenceTokenDomainTestModule : AbpModule
    {

    }
}