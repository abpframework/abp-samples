using OutputCachingMiddleware.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace OutputCachingMiddleware;

[DependsOn(
    typeof(OutputCachingMiddlewareEntityFrameworkCoreTestModule)
    )]
public class OutputCachingMiddlewareDomainTestModule : AbpModule
{

}
