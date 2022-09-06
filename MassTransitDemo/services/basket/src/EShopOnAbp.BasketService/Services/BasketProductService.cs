using EShopOnAbp.CatalogService.Grpc;
using EShopOnAbp.CatalogService.Products;
using Volo.Abp;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.ObjectMapping;

namespace EShopOnAbp.BasketService.Services;

public class BasketProductService : IBasketProductService, ITransientDependency
{
    private readonly IDistributedCache<ProductDto, Guid> _cache;
    private readonly ILogger<BasketProductService> _logger;
    private readonly IObjectMapper _mapper;
    private readonly ProductPublic.ProductPublicClient _productPublicGrpcClient;

    public BasketProductService(
        IDistributedCache<ProductDto, Guid> cache,
        ILogger<BasketProductService> logger,
        IObjectMapper mapper,
        ProductPublic.ProductPublicClient productPublicGrpcClient)
    {
        _cache = cache;
        _logger = logger;
        _mapper = mapper;
        _productPublicGrpcClient = productPublicGrpcClient;
    }

    public async Task<ProductDto> GetAsync(Guid productId)
    {
        return await _cache.GetOrAddAsync(
            productId,
            () => GetProductAsync(productId)
        );
    }

    private async Task<ProductDto> GetProductAsync(Guid productId)
    {
        var request = new ProductRequest { Id = productId.ToString() };
        _logger.LogInformation("=== GRPC request {@request}", request);
        var response = await _productPublicGrpcClient.GetByIdAsync(request);
        _logger.LogInformation("=== GRPC response {@response}", response);
        return _mapper.Map<ProductResponse, ProductDto>(response) ??
               throw new UserFriendlyException(BasketServiceDomainErrorCodes.ProductNotFound);
    }
}