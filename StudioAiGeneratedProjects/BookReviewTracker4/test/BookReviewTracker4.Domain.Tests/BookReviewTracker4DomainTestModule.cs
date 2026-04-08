using Volo.Abp.Modularity;

namespace BookReviewTracker4;

[DependsOn(
    typeof(BookReviewTracker4DomainModule),
    typeof(BookReviewTracker4TestBaseModule)
)]
public class BookReviewTracker4DomainTestModule : AbpModule
{

}
