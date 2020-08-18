using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace DevExtremeSample.EntityFrameworkCore
{
    public static class DevExtremeSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureDevExtremeSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(DevExtremeSampleConsts.DbTablePrefix + "YourEntities", DevExtremeSampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}