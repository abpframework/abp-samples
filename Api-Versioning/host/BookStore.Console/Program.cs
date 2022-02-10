using BookStore;
using BookStore.Books;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;
using Volo.Abp;
using Volo.Abp.Autofac;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

Log.Logger = new LoggerConfiguration()
#if DEBUG
    .MinimumLevel.Debug()
#else
    .MinimumLevel.Information()
#endif
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
    .Enrich.FromLogContext()
    .WriteTo.Async(c => c.File("Logs/logs.txt"))
#if DEBUG
    .WriteTo.Async(c => c.Console())
#endif
    .CreateLogger();

try
{
    Log.Information("Starting console host.");

    await Host.CreateDefaultBuilder(args)
        .ConfigureServices(services =>
        {
            services.AddHostedService<BookStoreHostedService>();
        })
        .UseSerilog()
        .RunConsoleAsync();

    return 0;
}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly!");
    return 1;
}
finally
{
    Log.CloseAndFlush();
}

public class BookStoreHostedService : IHostedService
{
    private IAbpApplicationWithInternalServiceProvider _abpApplication;

    private readonly IConfiguration _configuration;
    private readonly IHostEnvironment _hostEnvironment;

    public BookStoreHostedService(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
        _configuration = configuration;
        _hostEnvironment = hostEnvironment;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _abpApplication =  await AbpApplicationFactory.CreateAsync<BookStoreConsoleModule>(options =>
        {
            options.Services.ReplaceConfiguration(_configuration);
            options.Services.AddSingleton(_hostEnvironment);

            options.UseAutofac();
            options.Services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog());
        });

        await _abpApplication.InitializeAsync();

        var bookV5AppService = _abpApplication.ServiceProvider.GetRequiredService<IBookV5AppService>();
        var book = await bookV5AppService.GetAsync();
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(BookStoreHttpApiClientModule)
)]
public class BookStoreConsoleModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpRemoteServiceOptions>(options =>
        {
            options.RemoteServices.Default = new RemoteServiceConfiguration("https://localhost:44331/");
        });
    }
}
