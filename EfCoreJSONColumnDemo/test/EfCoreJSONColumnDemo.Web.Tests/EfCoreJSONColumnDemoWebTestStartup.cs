using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace EfCoreJSONColumnDemo;

public class EfCoreJSONColumnDemoWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<EfCoreJSONColumnDemoWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
