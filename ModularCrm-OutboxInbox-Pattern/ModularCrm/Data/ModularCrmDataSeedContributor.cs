using ModularCrm.Products;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Data;

public class ModularCrmDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Product, Guid> _productRepository;

    public ModularCrmDataSeedContributor(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _productRepository.FindAsync(x => x.Name == "Mastering ABP Framework Book") == null)
        {
            await _productRepository.InsertAsync(new Product
            {
                Name = "Mastering ABP Framework Book",
                StockCount = 100
            });
        }

        if (await _productRepository.FindAsync(x => x.Name == "ABP Commercial Business License") == null)
        {
            await _productRepository.InsertAsync(new Product
            {
                Name = "ABP Commercial Business License",
                StockCount = 100
            });
        }
    }
}
