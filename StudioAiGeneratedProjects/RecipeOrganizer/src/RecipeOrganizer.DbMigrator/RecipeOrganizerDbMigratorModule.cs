using RecipeOrganizer.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace RecipeOrganizer.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(RecipeOrganizerMongoDbModule),
    typeof(RecipeOrganizerApplicationContractsModule)
)]
public class RecipeOrganizerDbMigratorModule : AbpModule
{
}
