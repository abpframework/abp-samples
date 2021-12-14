using MyCompanyName.MyProjectName.Services;
using MyCompanyName.MyProjectName.Services.Dtos;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace MyCompanyName.MyProjectName.Pages;

public class IndexModel : AbpPageModel
{
    public List<TodoDto> TodoItems { get; set; }

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