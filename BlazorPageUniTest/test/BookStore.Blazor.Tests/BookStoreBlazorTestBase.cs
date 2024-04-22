using System;
using System.Threading.Tasks;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using NSubstitute;
using Volo.Abp;
using Volo.Abp.AspNetCore.Components.DependencyInjection;

namespace BookStore.Blazor.Tests;

public abstract class BookStoreBlazorTestBase : BookStoreTestBase<BookStoreBlazorTestModule>
{
    protected virtual TestContext CreateTestContext()
    {
        var testContext = new TestContext();
        var blazorise = testContext.JSInterop.SetupModule("./_content/Blazorise/utilities.js?v=1.5.1.0");
        blazorise.SetupVoid("log", _ => true);

        testContext.Services.UseServiceProviderFactory(serviceCollection =>
        {
            foreach (var service in ServiceProvider.GetRequiredService<IAbpApplicationWithExternalServiceProvider>().Services)
            {
                serviceCollection.Add(service);
            }
            var containerBuilder = new ContainerBuilder();
            containerBuilder.Populate(serviceCollection);
            return new AutofacServiceProvider(containerBuilder.Build());
        });

        testContext.Services.AddBlazorise().AddBootstrap5Providers().AddFontAwesomeIcons();
        testContext.Services.Replace(ServiceDescriptor.Transient<IComponentActivator, ServiceProviderComponentActivator>());

        return testContext;
    }
}
