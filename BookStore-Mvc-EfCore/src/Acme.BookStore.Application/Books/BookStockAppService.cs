using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Features;

namespace Acme.BookStore.Books;

[RequiresFeature("BookStore.StockManagement")]
public class BookStockAppService : ApplicationService, IBookStockAppService
{
    public async Task<int> GetStockCountAsync(Guid bookId)
    {
        return 42;
    }
}