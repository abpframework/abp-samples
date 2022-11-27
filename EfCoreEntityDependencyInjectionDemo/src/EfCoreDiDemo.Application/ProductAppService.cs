using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace EfCoreDiDemo;

public class ProductAppService : EfCoreDiDemoAppService, IProductAppService
{
    private readonly IRepository<Product, Guid> _productRepository;

    public ProductAppService(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }
    
    public async Task ChangeCodeAsync(ChangeProductCodeDto input)
    {
        var product = await _productRepository.GetAsync(input.Id);
        await product.ChangeCodeAsync(input.NewProductCode);
    }
}