using SignalRDemoBlazorUi.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(SignalRDemoBlazorUiMongoDbModule),
    typeof(SignalRDemoBlazorUiApplicationContractsModule)
    )]
public class SignalRDemoBlazorUiDbMigratorModule : AbpModule
{
}
