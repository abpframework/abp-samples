using Microsoft.AspNetCore.Components;
using TodoApp.Services;
using TodoApp.Services.Dtos;

namespace TodoApp.Pages;

public partial class Index
{
    [Inject]
    private TodoAppService TodoAppService { get; set; }

    private List<TodoItemDto> TodoItems { get; set; } = new List<TodoItemDto>();
    private string NewTodoText { get; set; }

    protected override async Task OnInitializedAsync()
    {
        TodoItems = await TodoAppService.GetListAsync();
    }
    
    private async Task Create()
    {
        var result = await TodoAppService.CreateAsync(NewTodoText);
        TodoItems.Add(result);
        NewTodoText = null;
    }

    private async Task Delete(TodoItemDto todoItem)
    {
        await TodoAppService.DeleteAsync(todoItem.Id);
        await Notify.Info("Deleted the todo item.");
        TodoItems.Remove(todoItem);
    }
}