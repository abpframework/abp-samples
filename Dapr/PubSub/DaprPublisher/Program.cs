using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Shared;
using Volo.Abp;
using Volo.Abp.Autofac;
using Volo.Abp.Dapr;
using Volo.Abp.EventBus.Dapr;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

var builder = Host.CreateDefaultBuilder(args);
builder.UseAutofac();
builder.ConfigureLogging(logging =>
{
    var config = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json", optional: false)
        .Build();
    logging.AddConfiguration(config.GetSection("Logging"));
});
builder.ConfigureServices(services =>
{
    services.AddHostedService<HostedService>();
    services.AddApplicationAsync<AppModule>(options =>
    {
        options.Services.ReplaceConfiguration(services.GetConfiguration());
    });
}).UseConsoleLifetime();

var host = builder.Build();
await host.Services.GetRequiredService<IAbpApplicationWithExternalServiceProvider>().InitializeAsync(host.Services);

await host.RunAsync();

[DependsOn(typeof(AbpAutofacModule), typeof(AbpEventBusDaprModule), typeof(SharedModule))]
public class AppModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDaprOptions>(options =>
        {
            options.HttpEndpoint = "http://localhost:8002";
            options.GrpcEndpoint = "http://localhost:8003";
        });

        Configure<AbpDaprEventBusOptions>(options =>
        {
            options.PubSubName = "test-pubsub";
        });
    }
}

public class HostedService : IHostedService
{
    private readonly IAbpApplicationWithExternalServiceProvider _abpApplication;
    private readonly IDistributedEventBus _eventBus;
    private readonly AbpDaprClientFactory _daprClientFactory;
    private readonly ILogger<HostedService> _logger;
    private readonly IUnitOfWorkManager _unitOfWorkManager;
    public HostedService(IAbpApplicationWithExternalServiceProvider abpApplication, IDistributedEventBus eventBus, AbpDaprClientFactory daprClientFactory, ILogger<HostedService> logger, IUnitOfWorkManager unitOfWorkManager)
    {
        _abpApplication = abpApplication;
        _eventBus = eventBus;
        _daprClientFactory = daprClientFactory;
        _logger = logger;
        _unitOfWorkManager = unitOfWorkManager;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using (var uow = _unitOfWorkManager.Begin())
        {
            _logger.LogInformation("Publishing events");
            for (var i = 0; i < 10; i++)
            {
                await _eventBus.PublishAsync(
                    new StockCountChangedEto
                    {
                        Product = $"Product {i}",
                        ChangedDate = DateTime.Now
                    }
                );

                await Task.Delay(500, cancellationToken);
            }

            await _daprClientFactory.Create().PublishEventAsync("test-pubsub", "StockCountChanged", new StockCountChangedEto
            {
                Product = "Product from Dapr client",
                ChangedDate = DateTime.Now
            }, cancellationToken);

            await _daprClientFactory.Create().PublishEventAsync("test-pubsub", "PriceChanged", new PriceChangedEto
            {
                Price = "Price from Dapr client",
                ChangedDate = DateTime.Now
            }, cancellationToken);

            await _daprClientFactory.Create().PublishEventAsync("test-pubsub", "test-topic", new CustomPubSubDataModel
            {
                Id = 123,
                Name = "321"
            }, cancellationToken);

            await uow.CompleteAsync(cancellationToken);

            _logger.LogInformation("Event publishing complete!");
        }
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}
