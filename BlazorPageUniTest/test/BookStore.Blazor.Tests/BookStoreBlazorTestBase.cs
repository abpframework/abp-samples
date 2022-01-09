using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;

namespace BookStore.Blazor.Tests;

public abstract class BookStoreBlazorTestBase : BookStoreTestBase<BookStoreBlazorTestModule>
{
    protected virtual TestContext CreateTestContext()
    {
        var testContext = new TestContext();
        testContext.Services.AddFallbackServiceProvider(ServiceProvider);
        foreach (var service in ServiceProvider.GetRequiredService<IAbpApplicationWithExternalServiceProvider>().Services)
        {
            testContext.Services.Add(service);
        }
        testContext.Services.AddBlazorise().AddBootstrap5Providers().AddFontAwesomeIcons();
        return testContext;
    }
}
