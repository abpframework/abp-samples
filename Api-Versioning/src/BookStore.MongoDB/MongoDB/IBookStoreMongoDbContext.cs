using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace BookStore.MongoDB;

[ConnectionStringName(BookStoreDbProperties.ConnectionStringName)]
public interface IBookStoreMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
