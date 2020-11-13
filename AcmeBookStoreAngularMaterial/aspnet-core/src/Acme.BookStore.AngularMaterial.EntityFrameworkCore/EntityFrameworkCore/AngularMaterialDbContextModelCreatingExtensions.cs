using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    public static class AngularMaterialDbContextModelCreatingExtensions
    {
        public static void ConfigureAngularMaterial(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(AngularMaterialConsts.DbTablePrefix + "YourEntities", AngularMaterialConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}