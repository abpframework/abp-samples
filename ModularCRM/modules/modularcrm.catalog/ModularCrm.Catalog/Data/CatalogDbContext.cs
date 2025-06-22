using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Catalog.Data;

[ConnectionStringName(CatalogDbProperties.ConnectionStringName)]
public class CatalogDbContext : AbpDbContext<CatalogDbContext>, ICatalogDbContext
{
    public DbSet<Product> Products { get; set; }

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
