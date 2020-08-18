using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace DevExtremeSample
{
    public class DevExtremeSampleWebTestStartup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<DevExtremeSampleWebTestModule>();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.InitializeApplication();
        }
    }
}