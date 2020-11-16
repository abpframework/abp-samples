using Acme.BookStore.Books;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    public static class AngularMaterialDbContextModelCreatingExtensions
    {
        public static void ConfigureAngularMaterial(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Book>(b =>
            {
                b.ToTable(AngularMaterialConsts.DbTablePrefix + "Books",
                    AngularMaterialConsts.DbSchema);
                b.ConfigureByConvention();
                b.Property(x => x.Name).IsRequired().HasMaxLength(128);
            });

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(AngularMaterialConsts.DbTablePrefix + "YourEntities", AngularMaterialConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}
