using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace OutputCachingMiddleware.Pages;

public class Index_Tests : OutputCachingMiddlewareWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
