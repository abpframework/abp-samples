using Acme.BookStore.AngularMaterial.Authors;
using Acme.BookStore.AngularMaterial.Books;
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
                b.HasOne<Author>().WithMany().HasForeignKey(x => x.AuthorId).IsRequired();
            });
            
            builder.Entity<Author>(b =>
            {
                b.ToTable(AngularMaterialConsts.DbTablePrefix + "Authors",
                    AngularMaterialConsts.DbSchema);
    
                b.ConfigureByConvention();
    
                b.Property(x => x.Name)
                    .IsRequired()
                    .HasMaxLength(AuthorConsts.MaxNameLength);

                b.HasIndex(x => x.Name);
            });
            
        }
    }
}
