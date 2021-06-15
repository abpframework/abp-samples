using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ConcurrencyDemo
{
    public interface IProductAppService : IApplicationService
    {
        Task<List<ProductDto>> GetListAsync();
        Task<ProductDto> GetAsync(Guid id);
        Task UpdateAsync(ProductDto input);
    }
}