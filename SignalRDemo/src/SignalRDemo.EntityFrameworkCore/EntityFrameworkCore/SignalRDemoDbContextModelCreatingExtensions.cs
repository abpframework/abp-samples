using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace SignalRDemo.EntityFrameworkCore
{
    public static class SignalRDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureSignalRDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(SignalRDemoConsts.DbTablePrefix + "YourEntities", SignalRDemoConsts.DbSchema);

            //    //...
            //});
        }
    }
}