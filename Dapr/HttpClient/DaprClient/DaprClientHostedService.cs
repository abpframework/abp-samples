using System;
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

namespace DaprClient;

public class DaprClientHostedService : IHostedService
{
    private readonly IAbpApplicationWithExternalServiceProvider _abpApplication;
    private readonly IHelloWorldAppService _helloWorldService;
    public  ILogger<DaprClientHostedService> Logger { get; set; }

    public DaprClientHostedService(IHelloWorldAppService helloWorldService, IAbpApplicationWithExternalServiceProvider abpApplication)
    {
        _helloWorldService = helloWorldService;
        _abpApplication = abpApplication;
        Logger = NullLogger<DaprClientHostedService>.Instance;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        Logger.LogInformation(await _helloWorldService.SayHelloAsync()); 
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}
