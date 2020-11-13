using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace AngularMaterialUIDemo.EntityFrameworkCore
{
    public static class AngularMaterialUIDemoDbContextModelCreatingExtensions
    {
        public static void ConfigureAngularMaterialUIDemo(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(AngularMaterialUIDemoConsts.DbTablePrefix + "YourEntities", AngularMaterialUIDemoConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}