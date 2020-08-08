using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace PasswordlessAuthentication.Pages
{
    public class Index_Tests : PasswordlessAuthenticationWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
