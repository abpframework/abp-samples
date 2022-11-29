using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EfCoreGuardedTypeDemo.Products;

public interface IProductAppService : IApplicationService
{
    Task UpdateProductCategoryAsync(Guid productId, Guid categoryId);
    Task<List<ProductDto>> GetListAsync();
}