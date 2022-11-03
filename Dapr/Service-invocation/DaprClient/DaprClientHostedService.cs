using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Serilog;
using Shared;
using Volo.Abp;
using Volo.Abp.Dapr;

namespace DaprClient;

public class DaprClientHostedService : IHostedService
{
    private readonly IAbpApplicationWithExternalServiceProvider _abpApplication;
    private readonly IAbpDaprClientFactory _daprClientFactory;
    private readonly IHelloWorldAppService _helloWorldService;
    public  ILogger<DaprClientHostedService> Logger { get; set; }

    public DaprClientHostedService(
        IHelloWorldAppService helloWorldService,
        IAbpApplicationWithExternalServiceProvider abpApplication,
        IAbpDaprClientFactory daprClientFactory)
    {
        _helloWorldService = helloWorldService;
        _abpApplication = abpApplication;
        _daprClientFactory = daprClientFactory;
        Logger = NullLogger<DaprClientHostedService>.Instance;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        // Using ABP's dynamic proxies
        Logger.LogInformation("Service proxy result: " + await _helloWorldService.SayHelloAsync());

        // Using Dapr's HttpClient
        var httpClient = await _daprClientFactory.CreateHttpClientAsync("dapr-httpapi");
        var result = await httpClient.GetStringAsync("api/helloworld", cancellationToken);
        Logger.LogInformation("HttpClient result: " + result);

        // Using Dapr's client
        var daprClient = await _daprClientFactory.CreateAsync();
        var result2 = await daprClient.InvokeMethodAsync<SayHelloResult>(HttpMethod.Get, "dapr-httpapi", "api/helloworld/json-result", cancellationToken);
        Logger.LogInformation("DaprClient result 2: " + result2.Result);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}
