using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;
using Volo.Saas.Editions;

namespace Acme.BookStore.Saas;

public class SaasDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IEditionDataSeeder _editionDataSeeder;
    private readonly ICurrentTenant _currentTenant;

    public SaasDataSeedContributor(IEditionDataSeeder editionDataSeeder, ICurrentTenant currentTenant)
    {
        _editionDataSeeder = editionDataSeeder;
        _currentTenant = currentTenant;
    }

    [UnitOfWork]
    public virtual async Task SeedAsync(DataSeedContext context)
    {
        using (_currentTenant.Change(context?.TenantId))
        {
            await _editionDataSeeder.CreateStandardEditionsAsync();
        }
    }
}
