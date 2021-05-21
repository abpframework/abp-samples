using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace UnifiedContextsDemo.EntityFrameworkCore
{
    public static class UnifiedContextsDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureUnifiedContextsDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(UnifiedContextsDemoConsts.DbTablePrefix + "YourEntities", UnifiedContextsDemoConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}