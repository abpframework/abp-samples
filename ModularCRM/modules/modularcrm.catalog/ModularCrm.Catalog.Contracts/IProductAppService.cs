using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Catalog;

public interface IProductAppService : IApplicationService
{
    Task<List<ProductDto>> GetListAsync();
    Task CreateAsync(ProductCreationDto input);
}
