using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace GrpcDemo.EntityFrameworkCore
{
    public static class GrpcDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureGrpcDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(GrpcDemoConsts.DbTablePrefix + "YourEntities", GrpcDemoConsts.DbSchema);

            //    //...
            //});
        }
    }
}