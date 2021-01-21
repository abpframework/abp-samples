using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ExcelIO.Pages
{
    public class Index_Tests : ExcelIOWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
