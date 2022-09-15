using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ProductManagement;

public class MyProductService : IMyProductService, ITransientDependency
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