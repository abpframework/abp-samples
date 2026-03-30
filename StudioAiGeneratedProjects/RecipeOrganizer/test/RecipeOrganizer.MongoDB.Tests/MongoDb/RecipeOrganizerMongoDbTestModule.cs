using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace RecipeOrganizer.MongoDB;

[DependsOn(
    typeof(RecipeOrganizerApplicationTestModule),
    typeof(RecipeOrganizerMongoDbModule)
)]
public class RecipeOrganizerMongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = RecipeOrganizerMongoDbFixture.GetRandomConnectionString();
        });
    }
}
