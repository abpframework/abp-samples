using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ConcurrentLogin.Pages;

public class Index_Tests : ConcurrentLoginWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
