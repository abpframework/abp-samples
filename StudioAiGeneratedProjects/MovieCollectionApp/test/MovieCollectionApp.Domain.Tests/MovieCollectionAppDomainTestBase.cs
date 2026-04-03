using Volo.Abp.Modularity;

namespace MovieCollectionApp;

/* Inherit from this class for your domain layer tests. */
public abstract class MovieCollectionAppDomainTestBase<TStartupModule> : MovieCollectionAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
