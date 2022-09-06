using System;
using System.Threading.Tasks;
using EShopOnAbp.CatalogService.Products;
using JetBrains.Annotations;

namespace EShopOnAbp.BasketService.Services;

public interface IBasketProductService
{
    [ItemNotNull]
    Task<ProductDto> GetAsync(Guid productId);
}