using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ConcurrencyDemo.Pages
{
    public class Index_Tests : ConcurrencyDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
