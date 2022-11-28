using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;

namespace EfCoreDiDemo;

/* An alternative way to implement domain logic is to use domain services. */
public class ProductManager : DomainService
{
    private readonly IRepository<Product, Guid> _productRepository;

    public ProductManager(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task ChangeCodeAsync(Product product, string newProductCode)
    {
        Check.NotNull(product, nameof(product));
        Check.NotNullOrWhiteSpace(newProductCode, nameof(newProductCode));

        if (product.ProductCode == newProductCode)
        {
            return;
        }
        
        if (await _productRepository.AnyAsync(x => x.ProductCode == newProductCode))
        {
            throw new ApplicationException("Product code is already used: " + newProductCode);
        }

        product.ProductCode = newProductCode;
    }
}