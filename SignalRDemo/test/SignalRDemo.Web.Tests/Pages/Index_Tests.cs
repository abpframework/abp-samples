using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace SignalRDemo.Pages
{
    public class Index_Tests : SignalRDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
