using Acme.BookStore.BookManagement.Authors;
using Acme.BookStore.BookManagement.Books;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Acme.BookStore.BookManagement.MongoDB
{
    [ConnectionStringName("BookManagement")]
    public interface IBookManagementMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<Book> Books { get; }

        IMongoCollection<Author> Authors { get; }

        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
