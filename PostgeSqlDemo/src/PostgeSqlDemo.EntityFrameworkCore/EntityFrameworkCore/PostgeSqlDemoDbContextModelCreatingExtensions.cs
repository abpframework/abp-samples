using Microsoft.EntityFrameworkCore;
using PostgeSqlDemo.Spatial;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace PostgeSqlDemo.EntityFrameworkCore
{
    public static class PostgeSqlDemoDbContextModelCreatingExtensions
    {
        public static void ConfigurePostgeSqlDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Country>(b =>
            {
                b.ConfigureByConvention();
            });

            builder.Entity<City>(b =>
            {
                b.ConfigureByConvention();
            });
        }
    }
}