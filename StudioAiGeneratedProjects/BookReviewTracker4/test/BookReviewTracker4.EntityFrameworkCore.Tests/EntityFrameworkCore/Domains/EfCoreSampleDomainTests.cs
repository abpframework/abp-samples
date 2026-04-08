using BookReviewTracker4.Samples;
using Xunit;

namespace BookReviewTracker4.EntityFrameworkCore.Domains;

[Collection(BookReviewTracker4TestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<BookReviewTracker4EntityFrameworkCoreTestModule>
{

}
