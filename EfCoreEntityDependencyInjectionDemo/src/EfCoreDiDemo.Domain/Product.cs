using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.Domain.Repositories;

namespace EfCoreDiDemo;

public class Product : AuditedAggregateRoot<Guid>, IInjectServiceProvider
{
    public string ProductCode { get; internal set; }
    
    public string Name { get; private set; }
    
    public ICachedServiceProvider ServiceProvider { get; set; }

    private Product()
    {
        /* This constructor is used by EF Core while
           getting the Product from database */
    }
    
    /* Primary constructor that should be used in the application code */
    public Product(string productCode, string name)
    {
        ProductCode = Check.NotNullOrWhiteSpace(productCode, nameof(productCode));
        Name = Check.NotNullOrWhiteSpace(name, nameof(name));
        
        /* Can not check here if the given product code is already used by another product! */
    }
    
    public async Task ChangeCodeAsync(string newProductCode)
    {
        Check.NotNullOrWhiteSpace(newProductCode, nameof(newProductCode));

        if (newProductCode == ProductCode)
        {
            return;
        }

        var productRepository = ServiceProvider
            .GetRequiredService<IRepository<Product, Guid>>();
        
        if (await productRepository.AnyAsync(x => x.ProductCode == newProductCode))
        {
            throw new ApplicationException("Product code is already used: " + newProductCode);
        }
        
        ProductCode = newProductCode;
    }
}