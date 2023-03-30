using Dapper;
using DapperDemo.Data;
using DapperDemo.DataViews;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;

namespace DapperDemo.Repositories;

public class DapperBookRepository :
    DapperRepository<DapperDemoDbContext>,
    IBookRepository,
    ITransientDependency
{
    public DapperBookRepository(IDbContextProvider<DapperDemoDbContext> dbContextProvider) 
        : base(dbContextProvider)
    {
    }
    
    public async Task<List<BookDataView>> GetListAsync()
    {
        var connection = await GetDbConnectionAsync();
        var sqlQuery = "SELECT Id, Name, Price FROM Books";
        var queryResult = await connection.QueryAsync<BookDataView>(sqlQuery);
        return queryResult.ToList();
    }
}