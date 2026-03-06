using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace ModularCrm.Catalog.Data;

public static class CatalogDbContextModelCreatingExtensions
{
    public static void ConfigureCatalog(
        this ModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Product>(b =>
        {
            b.ToTable(CatalogDbProperties.DbTablePrefix + "Products", CatalogDbProperties.DbSchema);

            b.ConfigureByConvention();

            b.Property(q => q.Name).IsRequired().HasMaxLength(100);
        });
    }
}
