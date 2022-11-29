using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace EfCoreJSONColumnDemo.Pages;

public class Index_Tests : EfCoreJSONColumnDemoWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
