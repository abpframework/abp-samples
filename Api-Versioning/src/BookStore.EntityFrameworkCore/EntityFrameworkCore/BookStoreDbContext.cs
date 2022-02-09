using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace BookStore.EntityFrameworkCore;

[ConnectionStringName(BookStoreDbProperties.ConnectionStringName)]
public class BookStoreDbContext : AbpDbContext<BookStoreDbContext>, IBookStoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureBookStore();
    }
}
