using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace SignInWithoutSpecifyingTenant;

public class SignInWithoutSpecifyingTenantWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<SignInWithoutSpecifyingTenantWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
