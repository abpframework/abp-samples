using Volo.Abp.Modularity;

namespace RecipeOrganizer;

/* Inherit from this class for your domain layer tests. */
public abstract class RecipeOrganizerDomainTestBase<TStartupModule> : RecipeOrganizerTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
