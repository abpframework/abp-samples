using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace DevExtremeAngular.EntityFrameworkCore
{
    public static class DevExtremeAngularDbContextModelCreatingExtensions
    {
        public static void ConfigureDevExtremeAngular(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(DevExtremeAngularConsts.DbTablePrefix + "YourEntities", DevExtremeAngularConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}