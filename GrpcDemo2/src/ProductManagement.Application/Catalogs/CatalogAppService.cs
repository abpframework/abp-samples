using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.Domain.Repositories;

namespace ProductManagement.Catalogs;

public class CatalogAppService : ProductManagementAppService, ICatalogAppService
{
    private readonly IRepository<Catalog, Guid> _catalogRepository;

    public CatalogAppService(IRepository<Catalog, Guid> catalogRepository)
    {
        _catalogRepository = catalogRepository;
    }

    public async Task<List<CatalogDto>> GetListAsync()
    {
        Logger.LogInformation($"==================== Current Tenant Name: {CurrentTenant.Name} ==================== ");
        return ObjectMapper.Map<List<Catalog>, List<CatalogDto>>(await _catalogRepository.GetListAsync());
    }
}