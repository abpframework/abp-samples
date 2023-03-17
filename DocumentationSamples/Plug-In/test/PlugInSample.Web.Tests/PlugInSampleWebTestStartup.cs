using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace PlugInSample;

public class PlugInSampleWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<PlugInSampleWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
