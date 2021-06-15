using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ConcurrencyDemo.EntityFrameworkCore
{
    public static class ConcurrencyDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureConcurrencyDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ConcurrencyDemoConsts.DbTablePrefix + "YourEntities", ConcurrencyDemoConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}