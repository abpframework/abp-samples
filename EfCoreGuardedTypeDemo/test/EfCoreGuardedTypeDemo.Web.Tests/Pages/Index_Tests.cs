using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace EfCoreGuardedTypeDemo.Pages;

public class Index_Tests : EfCoreGuardedTypeDemoWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
