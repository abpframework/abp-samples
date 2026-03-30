using Volo.Abp.Modularity;

namespace RecipeOrganizer;

[DependsOn(
    typeof(RecipeOrganizerDomainModule),
    typeof(RecipeOrganizerTestBaseModule)
)]
public class RecipeOrganizerDomainTestModule : AbpModule
{

}
