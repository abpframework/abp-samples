using Volo.Abp.Modularity;

namespace OutputCachingMiddleware;

[DependsOn(
    typeof(OutputCachingMiddlewareApplicationModule),
    typeof(OutputCachingMiddlewareDomainTestModule)
    )]
public class OutputCachingMiddlewareApplicationTestModule : AbpModule
{

}
