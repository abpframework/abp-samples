using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace BookReviewTracker4.Pages;

[Collection(BookReviewTracker4TestConsts.CollectionDefinitionName)]
public class Index_Tests : BookReviewTracker4WebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
