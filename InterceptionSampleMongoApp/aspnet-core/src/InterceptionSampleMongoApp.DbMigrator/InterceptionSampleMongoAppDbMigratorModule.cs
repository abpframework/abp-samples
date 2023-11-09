using InterceptionSampleMongoApp.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace InterceptionSampleMongoApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(InterceptionSampleMongoAppMongoDbModule),
    typeof(InterceptionSampleMongoAppApplicationContractsModule)
    )]
public class InterceptionSampleMongoAppDbMigratorModule : AbpModule
{
}
