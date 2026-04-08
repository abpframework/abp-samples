using Volo.Abp.Modularity;

namespace BookReviewTracker4;

public abstract class BookReviewTracker4ApplicationTestBase<TStartupModule> : BookReviewTracker4TestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
