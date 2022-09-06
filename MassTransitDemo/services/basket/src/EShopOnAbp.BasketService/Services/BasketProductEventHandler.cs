using EShopOnAbp.CatalogService.Products;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.ObjectMapping;

namespace EShopOnAbp.BasketService.Services;

public class BasketProductEventHandler : IDistributedEventHandler<EntityUpdatedEto<ProductEto>>, ITransientDependency
{
    private readonly IDistributedCache<ProductDto, Guid> _cache;
    private readonly IObjectMapper _objectMapper;
    private readonly IDistributedEventBus _distributedEventBus;

    public BasketProductEventHandler(
        IDistributedCache<ProductDto, Guid> cache,
        IObjectMapper objectMapper, 
        IDistributedEventBus distributedEventBus)
    {
        _cache = cache;
        _objectMapper = objectMapper;
        _distributedEventBus = distributedEventBus;
    }

    public async Task HandleEventAsync(EntityUpdatedEto<ProductEto> eventData)
    {
        var cachedProductDto = await _cache.GetAsync(eventData.Entity.Id);
        if (cachedProductDto == null)
        {
            return;
        }

        _objectMapper.Map(eventData.Entity, cachedProductDto);
        
        await _cache.SetAsync(eventData.Entity.Id, cachedProductDto);
        
        await _distributedEventBus.PublishAsync(
            new BasketProductUpdatedEto
            {
                ProductId = eventData.Entity.Id,
                ProductName = eventData.Entity.Name
            });
    }
}