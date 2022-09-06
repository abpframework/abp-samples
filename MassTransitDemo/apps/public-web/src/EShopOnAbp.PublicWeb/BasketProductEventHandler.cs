using System.Threading.Tasks;
using EShopOnAbp.BasketService.Services;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace EShopOnAbp.PublicWeb;

public class BasketProductEventHandler : IDistributedEventHandler<BasketProductUpdatedEto>, ITransientDependency
{
    private readonly IHubContext<BasketHub> _hubContext;

    public BasketProductEventHandler(IHubContext<BasketHub> hubContext)
    {
        _hubContext = hubContext;
    }
    
    public async Task HandleEventAsync(BasketProductUpdatedEto eventData)
    {
        await _hubContext.Clients.All.SendAsync("BasketProductUpdated", eventData);
    }
}