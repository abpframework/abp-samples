using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus;
using Volo.Abp.EventBus.Distributed;

namespace Shared;

public class DistributedEventSentHandle : ILocalEventHandler<DistributedEventSent>, ITransientDependency
{
    private readonly ILogger<DistributedEventSentHandle> _logger;

    public DistributedEventSentHandle(ILogger<DistributedEventSentHandle> logger)
    {
        _logger = logger;
    }

    public Task HandleEventAsync(DistributedEventSent eventData)
    {
        _logger.LogInformation("DistributedEventSent<" + eventData.Source + ", EventName:" + eventData.EventName + ", EventData:" +  JsonSerializer.Serialize(eventData.EventData) + ">");
        return Task.CompletedTask;
    }
}

public class DistributedEventReceivedHandle : ILocalEventHandler<DistributedEventReceived>, ITransientDependency
{
    private readonly ILogger<DistributedEventReceivedHandle> _logger;

    public DistributedEventReceivedHandle(ILogger<DistributedEventReceivedHandle> logger)
    {
        _logger = logger;
    }

    public Task HandleEventAsync(DistributedEventReceived eventData)
    {
        _logger.LogInformation("DistributedEventReceived<" + eventData.Source + ", EventName:" + eventData.EventName + ", EventData:" +  JsonSerializer.Serialize(eventData.EventData) + ">");
        return Task.CompletedTask;
    }
}
