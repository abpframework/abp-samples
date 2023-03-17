using PlugInSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace PlugInSample.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(PlugInSampleEntityFrameworkCoreModule),
    typeof(PlugInSampleApplicationContractsModule)
    )]
public class PlugInSampleDbMigratorModule : AbpModule
{

}
