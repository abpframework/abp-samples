using System;
using System.Threading.Tasks;
using EShopOnAbp.CatalogService.Products;
using EShopOnAbp.OrderingService.Orders;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Uow;

namespace EShopOnAbp.CatalogService;

public class OrderHandler : IDistributedEventHandler<OrderAcceptedEto>, ITransientDependency
{
    private readonly IRepository<Product, Guid> _productRepository;

    public OrderHandler(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }
    
    [UnitOfWork]
    public virtual async Task HandleEventAsync(OrderAcceptedEto eventData)
    {
        foreach (var orderItemEto in eventData.Items)
        {
            var product = await _productRepository.FindAsync(orderItemEto.ProductId);
            if (product == null)
            {
                continue;
            }

            var remainingStockCount = product.StockCount - orderItemEto.Units;
            product.SetStockCount(remainingStockCount);
            await _productRepository.UpdateAsync(product);
        }
    }
}