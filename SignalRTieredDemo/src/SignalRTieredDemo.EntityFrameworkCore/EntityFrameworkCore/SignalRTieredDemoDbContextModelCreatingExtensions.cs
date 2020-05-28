using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace SignalRTieredDemo.EntityFrameworkCore
{
    public static class SignalRTieredDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureSignalRTieredDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(SignalRTieredDemoConsts.DbTablePrefix + "YourEntities", SignalRTieredDemoConsts.DbSchema);

            //    //...
            //});
        }
    }
}