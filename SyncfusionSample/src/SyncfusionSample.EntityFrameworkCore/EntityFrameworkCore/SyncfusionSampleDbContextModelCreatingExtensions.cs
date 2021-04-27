using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace SyncfusionSample.EntityFrameworkCore
{
    public static class SyncfusionSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureSyncfusionSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(SyncfusionSampleConsts.DbTablePrefix + "YourEntities", SyncfusionSampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}