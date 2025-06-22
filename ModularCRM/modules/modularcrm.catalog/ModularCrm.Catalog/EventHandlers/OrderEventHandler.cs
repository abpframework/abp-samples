using ModularCrm.Catalog;
using ModularCrm.Ordering.Events;
using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Products.EventHandlers;

public class OrderEventHandler :
    IDistributedEventHandler<OrderPlacedEto>,
    ITransientDependency
{
    private readonly IRepository<Product, Guid> _productRepository;

    public OrderEventHandler(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task HandleEventAsync(OrderPlacedEto eventData)
    {
        // Find the related product
        var product = await _productRepository.FindAsync(eventData.ProductId);
        if (product == null)
        {
            return;
        }

        // Decrease the stock count
        product.StockCount = product.StockCount - 1;

        // Update the entity in the database
        await _productRepository.UpdateAsync(product);
    }
}