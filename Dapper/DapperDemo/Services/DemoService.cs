using Dapper;
using DapperDemo.DataViews;
using DapperDemo.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Uow;

namespace DapperDemo.Services;

/* This service is not used. It is for just demonstrate how
   to work with Dapper out of the repository */
public class DemoService : ITransientDependency
{
    private readonly IRepository<Book, Guid> _bookRepository;

    public DemoService(IRepository<Book, Guid> bookRepository)
    {
        _bookRepository = bookRepository;
    }
    
    [UnitOfWork]
    public virtual async Task<List<BookDataView>> GetListAsync()
    {
        var database = (await _bookRepository.GetDbContextAsync()).Database;
        var dbConnection = database.GetDbConnection();
        var dbTransaction = database.CurrentTransaction?.GetDbTransaction();
        
        var queryResult = await dbConnection.QueryAsync<BookDataView>(
            "SELECT Id, Name, Price FROM Books",
            transaction: dbTransaction
        );
        
        return queryResult.ToList();
    }
}