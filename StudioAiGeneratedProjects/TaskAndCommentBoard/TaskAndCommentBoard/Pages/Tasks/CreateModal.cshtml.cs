using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using TaskAndCommentBoard.Services.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TaskAndCommentBoard.Pages.Tasks;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateTaskDto TaskItem { get; set; } = null!;

    private readonly ITaskAppService _taskAppService;

    public CreateModalModel(ITaskAppService taskAppService)
    {
        _taskAppService = taskAppService;
    }

    public void OnGet()
    {
        TaskItem = new CreateUpdateTaskDto();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _taskAppService.CreateAsync(TaskItem);
        return NoContent();
    }
}
