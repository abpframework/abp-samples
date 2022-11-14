using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Serilog;
using Volo.Abp;
using Volo.Abp.DistributedLocking;

namespace DistributedLock;

public class DistributedLockHostedService : IHostedService
{
    private readonly IAbpApplicationWithExternalServiceProvider _abpApplication;
    private readonly IAbpDistributedLock _abpDistributedLock;
    public ILogger<DistributedLockHostedService> Logger { get; set; }

    public DistributedLockHostedService(
        IAbpApplicationWithExternalServiceProvider abpApplication,
        IAbpDistributedLock abpDistributedLock)
    {
        _abpApplication = abpApplication;
        _abpDistributedLock = abpDistributedLock;
        Logger = NullLogger<DistributedLockHostedService>.Instance;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        var name = "mylock";
        await using (var handle = await _abpDistributedLock.TryAcquireAsync(name))
        {
            if (handle != null)
            {
                Logger.LogInformation($"---------------------- Locked resource: {name}");
            }

            var handle2 = await _abpDistributedLock.TryAcquireAsync(name);
            {
                if (handle2 == null)
                {
                    Logger.LogWarning($"---------------------- The last lock was not released, Failed to lock {name}");
                }
            }
        }
        
        await using (var handle3 = await _abpDistributedLock.TryAcquireAsync(name))
        {
            if (handle3 != null)
            {
                Logger.LogInformation($"---------------------- The last lock was released, locked resource: {name}");
            }
        }
        
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _abpApplication.ShutdownAsync();
    }
}