using Xunit;

namespace BookReviewTracker4.EntityFrameworkCore;

[CollectionDefinition(BookReviewTracker4TestConsts.CollectionDefinitionName)]
public class BookReviewTracker4EntityFrameworkCoreCollection : ICollectionFixture<BookReviewTracker4EntityFrameworkCoreFixture>
{

}
