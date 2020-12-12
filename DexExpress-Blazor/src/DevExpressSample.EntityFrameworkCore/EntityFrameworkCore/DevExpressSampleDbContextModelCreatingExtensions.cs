using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace DevExpressSample.EntityFrameworkCore
{
    public static class DevExpressSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureDevExpressSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(DevExpressSampleConsts.DbTablePrefix + "YourEntities", DevExpressSampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}