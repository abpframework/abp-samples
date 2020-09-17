using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ExtendLocalizationResource.Pages
{
    public class Index_Tests : ExtendLocalizationResourceWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
