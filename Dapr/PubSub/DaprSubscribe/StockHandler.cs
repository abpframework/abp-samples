using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Shared;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace DaprSubscribe;

public class StockHandler : IDistributedEventHandler<StockCountChangedEto>, ITransientDependency
{
    private readonly ILogger<StockHandler> _logger;

    public StockHandler(ILogger<StockHandler> logger)
    {
        _logger = logger;
    }

    public Task HandleEventAsync(StockCountChangedEto eventData)
    {
        _logger.LogInformation($"Product: {eventData.Product}. Date: {eventData.ChangedDate}");
        return Task.CompletedTask;
    }
}

public class PriceHandler : IDistributedEventHandler<PriceChangedEto>, ITransientDependency
{
    private readonly ILogger<PriceHandler> _logger;

    public PriceHandler(ILogger<PriceHandler> logger)
    {
        _logger = logger;
    }

    public Task HandleEventAsync(PriceChangedEto eventData)
    {
        _logger.LogInformation($"Product: {eventData.Price}. Date: {eventData.ChangedDate}");
        return Task.CompletedTask;
    }
}
