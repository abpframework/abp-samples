using Volo.Abp.Modularity;

namespace RecipeOrganizer;

[DependsOn(
    typeof(RecipeOrganizerApplicationModule),
    typeof(RecipeOrganizerDomainTestModule)
)]
public class RecipeOrganizerApplicationTestModule : AbpModule
{

}
