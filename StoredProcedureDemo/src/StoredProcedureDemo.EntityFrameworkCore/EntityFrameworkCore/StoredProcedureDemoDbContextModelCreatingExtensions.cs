using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace StoredProcedureDemo.EntityFrameworkCore
{
    public static class StoredProcedureDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureStoredProcedureDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(StoredProcedureDemoConsts.DbTablePrefix + "YourEntities", StoredProcedureDemoConsts.DbSchema);

            //    //...
            //});
        }
    }
}