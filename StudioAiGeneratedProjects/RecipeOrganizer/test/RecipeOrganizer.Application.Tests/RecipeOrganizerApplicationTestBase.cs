using Volo.Abp.Modularity;

namespace RecipeOrganizer;

public abstract class RecipeOrganizerApplicationTestBase<TStartupModule> : RecipeOrganizerTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
