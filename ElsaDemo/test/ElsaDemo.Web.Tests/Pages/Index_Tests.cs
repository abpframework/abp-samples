using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ElsaDemo.Pages
{
    public class Index_Tests : ElsaDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
