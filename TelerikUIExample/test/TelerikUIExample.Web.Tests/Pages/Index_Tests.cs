using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace TelerikUIExample.Pages;

public class Index_Tests : TelerikUIExampleWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
