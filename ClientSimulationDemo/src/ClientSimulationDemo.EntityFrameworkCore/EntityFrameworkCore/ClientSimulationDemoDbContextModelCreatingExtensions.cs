using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ClientSimulationDemo.EntityFrameworkCore
{
    public static class ClientSimulationDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureClientSimulationDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ClientSimulationDemoConsts.DbTablePrefix + "YourEntities", ClientSimulationDemoConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}