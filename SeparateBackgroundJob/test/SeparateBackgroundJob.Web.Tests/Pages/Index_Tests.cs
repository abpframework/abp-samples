using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace SeparateBackgroundJob.Pages;

public class Index_Tests : SeparateBackgroundJobWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
