using System;
using System.Threading.Tasks;
using EShopOnAbp.CatalogService.Products;
using Grpc.Core;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace EShopOnAbp.CatalogService.Grpc;

public class PublicProductGrpService : ProductPublic.ProductPublicBase
{
    private readonly IRepository<Product, Guid> _productRepository;
    private readonly IObjectMapper _objectMapper;

    public PublicProductGrpService(IRepository<Product, Guid> productRepository, IObjectMapper objectMapper)
    {
        _productRepository = productRepository;
        _objectMapper = objectMapper;
    }

    public override async Task<ProductResponse> GetById(ProductRequest request, ServerCallContext context)
    {
        var product = await _productRepository.GetAsync(Guid.Parse(request.Id));
        return _objectMapper.Map<Product, ProductResponse>(product);
    }
}