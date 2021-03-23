using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace TodoApp.Pages
{
    public class Index_Tests : TodoAppWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
