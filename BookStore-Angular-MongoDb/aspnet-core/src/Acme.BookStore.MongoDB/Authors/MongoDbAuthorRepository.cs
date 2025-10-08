using Acme.BookStore.MongoDB;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;

namespace Acme.BookStore.Authors;

public class MongoDbAuthorRepository
    : MongoDbRepository<BookStoreMongoDbContext, Author, Guid>,
    IAuthorRepository
{
    public MongoDbAuthorRepository(
        IMongoDbContextProvider<BookStoreMongoDbContext> dbContextProvider
        ) : base(dbContextProvider)
    {
    }

    public async Task<Author> FindByNameAsync(string name)
    {
        var queryable = await GetQueryableAsync();
        return await queryable.FirstOrDefaultAsync(author => author.Name == name);
    }

    public async Task<List<Author>> GetListAsync(
        int skipCount,
        int maxResultCount,
        string sorting,
        string filter = null)
    {
        var queryable = await GetQueryableAsync();
        return await queryable
            .WhereIf<Author, IQueryable<Author>>(
                !filter.IsNullOrWhiteSpace(),
                author => author.Name.Contains(filter)
            )
            .OrderBy(sorting)
            .As<IQueryable<Author>>()
            .Skip(skipCount)
            .Take(maxResultCount)
            .ToListAsync();
    }
}
