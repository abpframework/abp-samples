using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace EfCoreDiDemo;

public class ProductAppService : EfCoreDiDemoAppService, IProductAppService
{
    private readonly IRepository<Product, Guid> _productRepository;
    private readonly ICachedServiceProvider _cachedServiceProvider;

    public ProductAppService(
        IRepository<Product, Guid> productRepository,
        ICachedServiceProvider cachedServiceProvider)
    {
        _productRepository = productRepository;
        _cachedServiceProvider = cachedServiceProvider;
    }

    public async Task CreateAsync(CreateProductDto input)
    {
        var product = new Product(input.ProductCode, input.Name)
        {
            ServiceProvider = _cachedServiceProvider
        };
        
        await _productRepository.InsertAsync(product);
    }
    
    public async Task ChangeCodeAsync(ChangeProductCodeDto input)
    {
        var product = await _productRepository.GetAsync(input.Id);
        await product.ChangeCodeAsync(input.NewProductCode);
    }
}