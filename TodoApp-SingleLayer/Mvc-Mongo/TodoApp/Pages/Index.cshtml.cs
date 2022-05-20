using TodoApp.Services;
using TodoApp.Services.Dtos;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TodoApp.Pages;

public class IndexModel : AbpPageModel
{
    public List<TodoItemDto> TodoItems { get; set; }

    private readonly TodoAppService _todoAppService;

    public IndexModel(TodoAppService todoAppService)
    {
        _todoAppService = todoAppService;
    }
    
    public async Task OnGetAsync()
    {
        TodoItems = await _todoAppService.GetListAsync();
    }
}