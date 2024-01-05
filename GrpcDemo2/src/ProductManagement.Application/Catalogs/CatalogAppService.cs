using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        return ObjectMapper.Map<List<Catalog>, List<CatalogDto>>(await _catalogRepository.GetListAsync());
    }
}