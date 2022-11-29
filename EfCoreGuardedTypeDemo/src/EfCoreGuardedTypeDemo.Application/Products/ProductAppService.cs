using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EfCoreGuardedTypeDemo.Categories;
using Volo.Abp.Domain.Repositories;

namespace EfCoreGuardedTypeDemo.Products;

public class ProductAppService : EfCoreGuardedTypeDemoAppService, IProductAppService
{
    private readonly IRepository<Product, ProductId> _productRepository;

    public ProductAppService(IRepository<Product, ProductId> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task UpdateProductCategoryAsync(Guid productId, Guid categoryId)
    {
        var productToUpdate = await _productRepository.GetAsync(new ProductId(productId));
        // productToUpdate.CategoryId = productId; // // Wrong assignment that causes error at compilation-time

        productToUpdate.CategoryId = new CategoryId(categoryId);
        
        await _productRepository.UpdateAsync(productToUpdate);
    }

    public  async Task<List<ProductDto>> GetListAsync()
    {
        var products = await _productRepository.GetListAsync();
        return ObjectMapper.Map<List<Product>, List<ProductDto>>(products);
    }
}