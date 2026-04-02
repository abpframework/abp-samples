using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using TaskAndCommentBoard.Services.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TaskAndCommentBoard.Pages.Tasks;

public class DetailsModel : AbpPageModel
{
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    public TaskDto TaskItem { get; private set; } = null!;

    private readonly ITaskAppService _taskAppService;

    public DetailsModel(ITaskAppService taskAppService)
    {
        _taskAppService = taskAppService;
    }

    public async Task<IActionResult> OnGetAsync()
    {
        TaskItem = await _taskAppService.GetAsync(Id);
        return Page();
    }
}
