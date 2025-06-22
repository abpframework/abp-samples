using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Catalog;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Products.Integration;

[IntegrationService]
public class ProductIntegrationService
    : CatalogAppService, IProductIntegrationService
{
    private readonly IRepository<Product, Guid> _productRepository;

    public ProductIntegrationService(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<List<ProductDto>> GetProductsByIdsAsync(List<Guid> ids)
    {
        var products = await _productRepository.GetListAsync(
            product => ids.Contains(product.Id)
        );

        return ObjectMapper.Map<List<Product>, List<ProductDto>>(products);
    }
}