using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace ConcurrencyDemo
{
    public class ProductDataSeeder : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Product, Guid> _productRepository;

        public ProductDataSeeder(IRepository<Product, Guid> productRepository)
        {
            _productRepository = productRepository;
        }
        
        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _productRepository.CountAsync() > 0)
            {
                return;
            }

            await _productRepository.InsertManyAsync(
                new Product[]
                {
                    new Product {Name = "Product one", Price = 42},
                    new Product {Name = "Product second", Price = 33.2f}
                }
            );
        }
    }
}