using System.Threading.Tasks;
using Shouldly;
using Xunit;
using ModularCrm.Catalog.Samples;

namespace ModularCrm.Catalog.Tests.Controllers;

/* This is a demo test class to show how to test HTTP API controllers.
 * You can delete this class freely.
 *
 * See https://docs.abp.io/en/abp/latest/Testing for more about automated tests.
 */

public class ExampleController_Tests : CatalogIntegrationTestBase
{
    [Fact]
    public async Task GetAsync()
    {
        var response = await GetResponseAsObjectAsync<SampleDto>("api/Catalog/example");
        response.Value.ShouldBe(42);
    }
}