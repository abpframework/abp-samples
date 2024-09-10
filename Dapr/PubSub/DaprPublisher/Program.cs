using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Shared;
using Volo.Abp;
using Volo.Abp.Autofac;
using Volo.Abp.Dapr;
using Volo.Abp.EventBus.Dapr;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Modularity;

var builder = Host.CreateDefaultBuilder(args);

builder.ConfigureServices(services =>
{
    services.AddHostedService<HostedService>();
    services.AddApplicationAsync<AppModule>(options =>
    {
        options.Services.ReplaceConfiguration(services.GetConfiguration());
        options.UseAutofac();
    });
}).UseConsoleLifetime();

var host = builder.Build();
await host.Services.GetRequiredService<IAbpApplicationWithExternalServiceProvider>().InitializeAsync(host.Services);

await host.RunAsync();

[DependsOn(typeof(AbpAutofacModule), typeof(AbpEventBusDaprModule))]
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

    public HostedService(IAbpApplicationWithExternalServiceProvider abpApplication, IDistributedEventBus eventBus, AbpDaprClientFactory daprClientFactory)
    {
        _abpApplication = abpApplication;
        _eventBus = eventBus;
        _daprClientFactory = daprClientFactory;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        Console.WriteLine("Publishing events");
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

        await (await _daprClientFactory.CreateAsync()).PublishEventAsync("test-pubsub", "StockCountChanged", new StockCountChangedEto
        {
            Product = "Product from Dapr client",
            ChangedDate = DateTime.Now
        }, cancellationToken);

        await (await _daprClientFactory.CreateAsync()).PublishEventAsync("test-pubsub", "PriceChanged", new PriceChangedEto
        {
            Price = "Price from Dapr client",
            ChangedDate = DateTime.Now
        }, cancellationToken);

        await (await _daprClientFactory.CreateAsync()).PublishEventAsync("test-pubsub", "test-topic", new CustomPubSubDataModel
        {
            Id = 123,
            Name = "321"
        }, cancellationToken);

        Console.WriteLine("Event publishing complete!");
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}
