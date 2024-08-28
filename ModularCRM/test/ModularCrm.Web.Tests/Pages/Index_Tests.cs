using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ModularCrm.Pages;

[Collection(ModularCrmTestConsts.CollectionDefinitionName)]
public class Index_Tests : ModularCrmWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
