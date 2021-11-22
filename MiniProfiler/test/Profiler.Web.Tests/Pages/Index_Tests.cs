using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Profiler.Pages
{
    public class Index_Tests : ProfilerWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
