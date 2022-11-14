using System;
using System.Threading.Tasks;
using Shared;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace DaprSubscribe;

public class StockHandler : IDistributedEventHandler<StockCountChangedEto>, ITransientDependency
{
    public Task HandleEventAsync(StockCountChangedEto eventData)
    {
        Console.WriteLine($"Product: {eventData.Product}. Date: {eventData.ChangedDate}");
        return Task.CompletedTask;
    }
}

public class PriceHandler : IDistributedEventHandler<PriceChangedEto>, ITransientDependency
{
    public Task HandleEventAsync(PriceChangedEto eventData)
    {
        Console.WriteLine($"Product: {eventData.Price}. Date: {eventData.ChangedDate}");
        return Task.CompletedTask;
    }
}
