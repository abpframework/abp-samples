using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Catalog.Data;

[ConnectionStringName(CatalogDbProperties.ConnectionStringName)]
public interface ICatalogDbContext : IEfCoreDbContext
{
    DbSet<Product> Products { get; set; }
}
