using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace EfCoreGuardedTypeDemo;

public class EfCoreGuardedTypeDemoWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<EfCoreGuardedTypeDemoWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
