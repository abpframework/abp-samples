using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace DatePickerTest;

public class DatePickerTestWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<DatePickerTestWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
