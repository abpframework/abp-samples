using System.Collections.Generic;
using System.ServiceModel;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ProductManagement.Products;

[ServiceContract]
public interface IProductAppService : IApplicationService
{
    Task<List<ProductDto>> GetListAsync();
}