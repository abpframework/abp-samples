using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace OutputCachingMiddleware;

public class OutputCachingMiddlewareWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<OutputCachingMiddlewareWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
