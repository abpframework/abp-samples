using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace TelerikUIExample;

public class TelerikUIExampleWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<TelerikUIExampleWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
