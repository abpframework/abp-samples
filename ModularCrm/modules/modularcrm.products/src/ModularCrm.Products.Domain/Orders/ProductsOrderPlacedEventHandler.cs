using ModularCrm.Ordering.Events;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Products.Orders
{
    public class ProductsOrderPlacedEventHandler : IDistributedEventHandler<OrderPlacedEto>, ITransientDependency
    {
        private readonly IRepository<Product, Guid> _productRepository;
        private readonly ILogger<ProductsOrderPlacedEventHandler> _logger;
        public ProductsOrderPlacedEventHandler(IRepository<Product, Guid> productRepository, ILogger<ProductsOrderPlacedEventHandler> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        public async Task HandleEventAsync(OrderPlacedEto eventData)
        {
            _logger.LogInformation($"[Products Module] OrderPlacedEto event received: OrderId: {eventData.Id}, CustomerName: {eventData.CustomerName}, ProductId: {eventData.ProductId}");

            // Find the related product
            var product = await _productRepository.FindAsync(eventData.ProductId);
            if (product == null)
            {
                _logger.LogWarning($"[Products Module] Product not found for ProductId: {eventData.ProductId}");
                return;
            }

            // Decrease the stock count
            product.StockCount = product.StockCount - 1;

            // Update the entity in the database
            await _productRepository.UpdateAsync(product);

            _logger.LogInformation($"[Products Module] Stock count decreased for ProductId: {eventData.ProductId}");
        }
    }
}
