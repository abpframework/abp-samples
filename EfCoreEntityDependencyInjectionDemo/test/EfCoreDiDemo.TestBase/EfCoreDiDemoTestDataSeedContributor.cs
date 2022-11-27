using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace EfCoreDiDemo;

public class EfCoreDiDemoTestDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Product, Guid> _productRepository;

    public EfCoreDiDemoTestDataSeedContributor(
        IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        await _productRepository.InsertAsync(new Product("P01", "Product One"));
        await _productRepository.InsertAsync(new Product("P02", "Product Two"));
    }
}
