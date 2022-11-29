using System.Threading.Tasks;
using EfCoreGuardedTypeDemo.Categories;
using EfCoreGuardedTypeDemo.Products;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;

namespace EfCoreGuardedTypeDemo;

public class ProductStoreDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Category, CategoryId> _categoryRepository;
    private readonly IRepository<Product, ProductId> _productRepository;
    private readonly IGuidGenerator _guidGenerator;

    public ProductStoreDataSeedContributor(
        IRepository<Category, CategoryId> categoryRepository,
        IRepository<Product, ProductId> productRepository,
        IGuidGenerator guidGenerator
    )
    {
        _categoryRepository = categoryRepository;
        _productRepository = productRepository;
        _guidGenerator = guidGenerator;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _categoryRepository.GetCountAsync() <= 0)
        {
            await SeedSampleDataAsync();
        }
    }

    private async Task SeedSampleDataAsync()
    {
        var tv1 = await _productRepository.InsertAsync(
            new Product(new ProductId(_guidGenerator.Create()), "Super LED TV")
        );

        var tv2 = await _productRepository.InsertAsync(
            new Product(new ProductId(_guidGenerator.Create()), "Not so super TV")
        );

        var tvCategory = new Category(new CategoryId(_guidGenerator.Create()), "TVs");
        tvCategory.Products.Add(tv1);
        tvCategory.Products.Add(tv2);

        await _categoryRepository.InsertAsync(tvCategory);
    }
}