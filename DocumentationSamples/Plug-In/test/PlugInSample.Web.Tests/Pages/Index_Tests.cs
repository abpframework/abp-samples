using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace PlugInSample.Pages;

public class Index_Tests : PlugInSampleWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
