using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ImageManipulationDemo.Pages;

public class Index_Tests : ImageManipulationDemoWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
