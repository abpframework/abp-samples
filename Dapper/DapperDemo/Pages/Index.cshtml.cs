using DapperDemo.DataViews;
using DapperDemo.Repositories;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DapperDemo.Pages;

public class IndexModel : AbpPageModel
{
    public List<BookDataView> Books { get; private set; }

    private readonly BookRepository _bookRepository;

    public IndexModel(BookRepository bookRepository)
    {
        _bookRepository = bookRepository;
    }
    
    public async Task OnGetAsync()
    {
        Books = await _bookRepository.GetListAsync();
    }
}