using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductManagement.Products;

public class ProductAppService : ProductManagementAppService, IProductAppService
{
    public async Task<List<ProductDto>> GetListAsync()
    {
        return new List<ProductDto>
        {
            new ProductDto { Id = Guid.NewGuid(), Name = "Product 1" },
            new ProductDto { Id = Guid.NewGuid(), Name = "Product 2" },
        };
    }
}