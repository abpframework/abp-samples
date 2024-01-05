using System.Collections.Generic;
using System.ServiceModel;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ProductManagement.Catalogs;

[ServiceContract]
public interface ICatalogAppService : IApplicationService
{
    Task<List<CatalogDto>> GetListAsync();
}