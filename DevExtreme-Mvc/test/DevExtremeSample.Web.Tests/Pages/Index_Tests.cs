using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace DevExtremeSample.Pages
{
    public class Index_Tests : DevExtremeSampleWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
