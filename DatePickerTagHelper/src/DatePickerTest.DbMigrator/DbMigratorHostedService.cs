﻿using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DatePickerTest.Data;
using Serilog;
using Volo.Abp;
using Volo.Abp.Data;

namespace DatePickerTest.DbMigrator;

public class DbMigratorHostedService : IHostedService
{
    private readonly IHostApplicationLifetime _hostApplicationLifetime;
    private readonly IConfiguration _configuration;

    public DbMigratorHostedService(IHostApplicationLifetime hostApplicationLifetime, IConfiguration configuration)
    {
        _hostApplicationLifetime = hostApplicationLifetime;
        _configuration = configuration;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using (var application = await AbpApplicationFactory.CreateAsync<DatePickerTestDbMigratorModule>(options =>
        {
           options.Services.ReplaceConfiguration(_configuration);
           options.UseAutofac();
           options.Services.AddLogging(c => c.AddSerilog());
           options.AddDataMigrationEnvironment();
        }))
        {
            await application.InitializeAsync();

            await application
                .ServiceProvider
                .GetRequiredService<DatePickerTestDbMigrationService>()
                .MigrateAsync();

            await application.ShutdownAsync();

            _hostApplicationLifetime.StopApplication();
        }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
