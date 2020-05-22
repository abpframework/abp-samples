using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace GrpcDemo.Pages
{
    public class Index_Tests : GrpcDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
