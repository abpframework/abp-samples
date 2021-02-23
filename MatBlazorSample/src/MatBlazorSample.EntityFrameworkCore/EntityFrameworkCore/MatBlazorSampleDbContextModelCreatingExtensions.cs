using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace MatBlazorSample.EntityFrameworkCore
{
    public static class MatBlazorSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureMatBlazorSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(MatBlazorSampleConsts.DbTablePrefix + "YourEntities", MatBlazorSampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}