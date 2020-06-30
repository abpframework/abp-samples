using Microsoft.EntityFrameworkCore;
using OrganizationUnitSample.Products;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace OrganizationUnitSample.EntityFrameworkCore
{
    public static class OrganizationUnitSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureOrganizationUnitSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Product>(b =>
            {
                b.ToTable(OrganizationUnitSampleConsts.DbTablePrefix + "Products", OrganizationUnitSampleConsts.DbSchema);
                b.ConfigureByConvention();

                b.Property(x => x.OrganizationUnitId).IsRequired();
                b.Property(x => x.Name).IsRequired();
                b.Property(x => x.Price).IsRequired();

                //...
            });
        }
    }
}
