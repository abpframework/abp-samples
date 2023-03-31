using Dapper;
using DapperDemo.Data;
using DapperDemo.DataViews;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;

namespace DapperDemo.Repositories;

public class BookRepository : DapperRepository<DapperDemoDbContext>, ITransientDependency
{
    public BookRepository(IDbContextProvider<DapperDemoDbContext> dbContextProvider) 
        : base(dbContextProvider)
    {
    }
    
    public virtual async Task<List<BookDataView>> GetListAsync()
    {
        var connection = await GetDbConnectionAsync();
        var queryResult = await connection.QueryAsync<BookDataView>(
            "SELECT Id, Name, Price FROM Books",
            transaction: await GetDbTransactionAsync()
        );
        return queryResult.ToList();
    }
}