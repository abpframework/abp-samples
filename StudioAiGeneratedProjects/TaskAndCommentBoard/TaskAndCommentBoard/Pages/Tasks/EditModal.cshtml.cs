using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using TaskAndCommentBoard.Services.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TaskAndCommentBoard.Pages.Tasks;

public class EditModalModel : AbpPageModel
{
    [HiddenInput]
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    [BindProperty]
    public CreateUpdateTaskDto TaskItem { get; set; } = null!;

    private readonly ITaskAppService _taskAppService;

    public EditModalModel(ITaskAppService taskAppService)
    {
        _taskAppService = taskAppService;
    }

    public async Task OnGetAsync()
    {
        var taskDto = await _taskAppService.GetAsync(Id);
        TaskItem = ObjectMapper.Map<TaskDto, CreateUpdateTaskDto>(taskDto);
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _taskAppService.UpdateAsync(Id, TaskItem);
        return NoContent();
    }
}
