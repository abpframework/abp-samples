using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace CustomApplicationModules.Pages
{
    public class Index_Tests : CustomApplicationModulesWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
