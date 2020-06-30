using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace OrganizationUnitSample.Pages
{
    public class Index_Tests : OrganizationUnitSampleWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
