using Volo.Abp.Modularity;

namespace BookReviewTracker4;

/* Inherit from this class for your domain layer tests. */
public abstract class BookReviewTracker4DomainTestBase<TStartupModule> : BookReviewTracker4TestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
