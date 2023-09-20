using SeparateBackgroundJob.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace SeparateBackgroundJob.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(SeparateBackgroundJobEntityFrameworkCoreModule),
    typeof(SeparateBackgroundJobApplicationContractsModule)
    )]
public class SeparateBackgroundJobDbMigratorModule : AbpModule
{
}
