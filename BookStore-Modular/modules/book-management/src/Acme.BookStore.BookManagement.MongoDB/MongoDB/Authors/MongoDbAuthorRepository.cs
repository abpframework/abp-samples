using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Acme.BookStore.BookManagement.Authors;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;

namespace Acme.BookStore.BookManagement.MongoDB.Authors;

public class MongoDbAuthorRepository : MongoDbRepository<BookManagementMongoDbContext, Author, Guid>, IAuthorRepository
{
    public MongoDbAuthorRepository(IMongoDbContextProvider<BookManagementMongoDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }

    public async Task<Author> FindByNameAsync(string name)
    {
        return await (await GetMongoQueryableAsync()).FirstOrDefaultAsync(author => author.Name == name);
    }

    public async Task<List<Author>> GetListAsync(int skipCount, int maxResultCount, string sorting, string filter = null)
    {
        var dbSet = await GetMongoQueryableAsync();
        return await dbSet
            .WhereIf(
                !filter.IsNullOrWhiteSpace(),
                author => author.Name.Contains(filter)
            )
            .OrderBy(sorting)
            .Skip(skipCount)
            .Take(maxResultCount)
            .As<IMongoQueryable<Author>>()
            .ToListAsync();
    }
}
