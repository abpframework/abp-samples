using Volo.Abp.Modularity;

namespace MovieCollectionApp;

public abstract class MovieCollectionAppApplicationTestBase<TStartupModule> : MovieCollectionAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
