using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace EfCoreDiDemo.Pages;

public class Index_Tests : EfCoreDiDemoWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
