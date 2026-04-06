using Volo.Abp.Modularity;

namespace BookReviewTracker4;

[DependsOn(
    typeof(BookReviewTracker4ApplicationModule),
    typeof(BookReviewTracker4DomainTestModule)
)]
public class BookReviewTracker4ApplicationTestModule : AbpModule
{

}
