using Volo.Abp.Modularity;

namespace BookStore;

public abstract class BookStoreApplicationTestBase<TStartupModule> : BookStoreTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
