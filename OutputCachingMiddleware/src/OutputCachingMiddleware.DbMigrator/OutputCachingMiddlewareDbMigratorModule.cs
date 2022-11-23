using OutputCachingMiddleware.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace OutputCachingMiddleware.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(OutputCachingMiddlewareEntityFrameworkCoreModule),
    typeof(OutputCachingMiddlewareApplicationContractsModule)
    )]
public class OutputCachingMiddlewareDbMigratorModule : AbpModule
{

}
