using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace SignInWithoutSpecifyingTenant.Pages
{
    public class Index_Tests : SignInWithoutSpecifyingTenantWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
