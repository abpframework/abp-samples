using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace TodoApp
{
    public class TodoAppWebTestStartup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<TodoAppWebTestModule>();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.InitializeApplication();
        }
    }
}