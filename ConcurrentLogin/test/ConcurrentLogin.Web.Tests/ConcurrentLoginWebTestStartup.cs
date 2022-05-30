using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace ConcurrentLogin;

public class ConcurrentLoginWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<ConcurrentLoginWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
