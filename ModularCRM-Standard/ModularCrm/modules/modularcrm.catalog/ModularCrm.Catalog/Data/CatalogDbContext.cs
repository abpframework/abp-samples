using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Catalog.Data;

[ConnectionStringName(CatalogDbProperties.ConnectionStringName)]
public class CatalogDbContext : AbpDbContext<CatalogDbContext>, ICatalogDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public CatalogDbContext(DbContextOptions<CatalogDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureCatalog();
    }
}
