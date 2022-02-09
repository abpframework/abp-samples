using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace BookStore.EntityFrameworkCore;

[ConnectionStringName(BookStoreDbProperties.ConnectionStringName)]
public interface IBookStoreDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
