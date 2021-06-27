using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace UnifiedContextsDemo
{
    public class UnifiedContextsDemoWebTestStartup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<UnifiedContextsDemoWebTestModule>();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.InitializeApplication();
        }
    }
}