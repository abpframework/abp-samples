using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace UnifiedContextsDemo.Pages
{
    public class Index_Tests : UnifiedContextsDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
