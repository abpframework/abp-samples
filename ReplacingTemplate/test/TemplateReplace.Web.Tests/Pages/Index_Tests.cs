using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace TemplateReplace.Pages
{
    public class Index_Tests : TemplateReplaceWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
