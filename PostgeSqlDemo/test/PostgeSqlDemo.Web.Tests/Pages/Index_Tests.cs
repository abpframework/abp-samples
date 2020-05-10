using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace PostgeSqlDemo.Pages
{
    public class Index_Tests : PostgeSqlDemoWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
