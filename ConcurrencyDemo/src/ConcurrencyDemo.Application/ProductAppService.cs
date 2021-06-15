using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace ConcurrencyDemo
{
    public class ProductAppService : ConcurrencyDemoAppService, IProductAppService
    {
        private readonly IRepository<Product, Guid> _productRepository;

        public ProductAppService(IRepository<Product, Guid> productRepository)
        {
            _productRepository = productRepository;
        }
        
        public async Task<List<ProductDto>> GetListAsync()
        {
            var products = await _productRepository.GetListAsync();
            return products.Select(p => new ProductDto
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                ConcurrencyStamp = p.ConcurrencyStamp
            }).ToList();
        }

        public async Task<ProductDto> GetAsync(Guid id)
        {
            var product = await _productRepository.GetAsync(id);
            return new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                ConcurrencyStamp = product.ConcurrencyStamp
            };
        }

        public async Task UpdateAsync(ProductDto input)
        {
            var product = await _productRepository.GetAsync(input.Id);
            product.Name = input.Name;
            product.Price = input.Price;
            product.ConcurrencyStamp = input.ConcurrencyStamp;
            await _productRepository.UpdateAsync(product);
        }
    }
}