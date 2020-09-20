using Acme.BookStore.Authors;
using Acme.BookStore.Books;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Acme.BookStore.EntityFrameworkCore
{
    public static class BookStoreDbContextModelCreatingExtensions
    {
        public static void ConfigureBookStore(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Book>(b =>
            {
                b.ToTable(BookStoreConsts.DbTablePrefix + "Books", BookStoreConsts.DbSchema);
                b.ConfigureByConvention(); //auto configure for the base class props
                b.Property(x => x.Name).IsRequired().HasMaxLength(128);

                // ADD THE MAPPING FOR THE RELATION
                b.HasOne<Author>().WithMany().HasForeignKey(x => x.AuthorId).IsRequired();
            });

            builder.Entity<Author>(b =>
            {
                b.ToTable(BookStoreConsts.DbTablePrefix + "Authors",
                    BookStoreConsts.DbSchema);

                b.ConfigureByConvention();

                b.Property(x => x.Name)
                    .IsRequired()
                    .HasMaxLength(AuthorConsts.MaxNameLength);

                b.HasIndex(x => x.Name);
            });
        }
    }
}