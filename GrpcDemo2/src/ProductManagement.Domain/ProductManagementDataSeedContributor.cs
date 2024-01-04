using System;
using System.Threading.Tasks;
using ProductManagement.Catalogs;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace ProductManagement;

public class ProductManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Catalog, Guid> _catalogRepository;
    private readonly ICurrentTenant _currentTenant;

    public ProductManagementDataSeedContributor(
        IRepository<Catalog, Guid> catalogRepository,
        ICurrentTenant currentTenant)
    {
        _catalogRepository = catalogRepository;
        _currentTenant = currentTenant;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _catalogRepository.CountAsync() == 0)
        {
            await SeedCatalogsAsync(context);
        }
    }

    private async Task SeedCatalogsAsync(DataSeedContext context)
    {
        using (_currentTenant.Change(context.TenantId))
        {
            await _catalogRepository.InsertAsync(new Catalog()
            {
                Name = context.TenantId == null ? "Books" : "Gadgets"
            });
        }
    }
}