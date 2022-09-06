using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace EShopOnAbp.CatalogService.Products
{
    public interface IProductAppService : IApplicationService
    {
        Task<PagedResultDto<ProductDto>> GetListPagedAsync(PagedAndSortedResultRequestDto input);

        Task<ListResultDto<ProductDto>> GetListAsync();

        Task<ProductDto> GetAsync(Guid id);

        Task<ProductDto> CreateAsync(CreateProductDto input);

        Task<ProductDto> UpdateAsync(Guid id, UpdateProductDto input);

        Task DeleteAsync(Guid id);
    }
}