using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ExcelIO.EntityFrameworkCore
{
    public static class ExcelIODbContextModelCreatingExtensions
    {
        public static void ConfigureExcelIO(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ExcelIOConsts.DbTablePrefix + "YourEntities", ExcelIOConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}