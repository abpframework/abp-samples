using DapperDemo.DataViews;

namespace DapperDemo.Repositories;

public interface IBookRepository
{
    Task<List<BookDataView>> GetListAsync();
}