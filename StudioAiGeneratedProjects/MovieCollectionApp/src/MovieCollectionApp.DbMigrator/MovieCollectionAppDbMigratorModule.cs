using MovieCollectionApp.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace MovieCollectionApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(MovieCollectionAppMongoDbModule),
    typeof(MovieCollectionAppApplicationContractsModule)
)]
public class MovieCollectionAppDbMigratorModule : AbpModule
{
}
