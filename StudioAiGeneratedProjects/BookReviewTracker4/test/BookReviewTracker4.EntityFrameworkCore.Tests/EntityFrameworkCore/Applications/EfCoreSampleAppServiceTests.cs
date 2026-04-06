using BookReviewTracker4.Samples;
using Xunit;

namespace BookReviewTracker4.EntityFrameworkCore.Applications;

[Collection(BookReviewTracker4TestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<BookReviewTracker4EntityFrameworkCoreTestModule>
{

}
