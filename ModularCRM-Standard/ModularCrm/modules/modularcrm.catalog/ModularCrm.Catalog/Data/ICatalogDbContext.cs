using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Catalog.Data;

[ConnectionStringName(CatalogDbProperties.ConnectionStringName)]
public interface ICatalogDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
