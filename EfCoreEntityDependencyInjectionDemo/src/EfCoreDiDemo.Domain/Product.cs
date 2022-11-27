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
    public string ProductCode { get; private set; }
    
    public string Name { get; private set; }
    
    public ICachedServiceProvider ServiceProvider { get; set; }
    
    public Product(string productCode, string name)
    {
        ProductCode = Check.NotNullOrWhiteSpace(productCode, nameof(productCode));
        Name = Check.NotNullOrWhiteSpace(name, nameof(name));
    }
    
    public async Task ChangeCodeAsync(string productCode)
    {
        Check.NotNullOrWhiteSpace(productCode, nameof(productCode));

        if (productCode == ProductCode)
        {
            return;
        }

        var productRepository = ServiceProvider
            .GetRequiredService<IRepository<Product, Guid>>();
        
        if (await productRepository.AnyAsync(x => x.ProductCode == productCode))
        {
            throw new ApplicationException("Product code is already used: " + productCode);
        }
        
        ProductCode = productCode;
    }
}