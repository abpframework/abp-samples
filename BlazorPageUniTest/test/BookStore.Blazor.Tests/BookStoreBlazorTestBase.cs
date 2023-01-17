using System;
using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp;
using Volo.Abp.AspNetCore.Components.DependencyInjection;

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
        testContext.Services.Replace(ServiceDescriptor.Transient<IComponentActivator, ServiceProviderComponentActivator>());

        return testContext;
    }
}
