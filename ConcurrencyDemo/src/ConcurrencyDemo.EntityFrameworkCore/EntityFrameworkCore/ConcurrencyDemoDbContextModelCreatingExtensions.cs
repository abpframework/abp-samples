using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace ConcurrencyDemo.EntityFrameworkCore
{
    public static class ConcurrencyDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureConcurrencyDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<Product>(b =>
            {
                b.ToTable("Products");
                b.ConfigureByConvention();
            });
        }
    }
}