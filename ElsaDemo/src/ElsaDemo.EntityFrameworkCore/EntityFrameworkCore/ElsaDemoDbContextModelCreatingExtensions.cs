using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ElsaDemo.EntityFrameworkCore
{
    public static class ElsaDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureElsaDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ElsaDemoConsts.DbTablePrefix + "YourEntities", ElsaDemoConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}