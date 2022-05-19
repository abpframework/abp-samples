using TodoApp.Services.Dtos;
using Volo.Abp.Application.Services;

namespace TodoApp.Services;

public interface ITodoAppService : IApplicationService
{
    Task<List<TodoItemDto>> GetListAsync();
    Task<TodoItemDto> CreateAsync(string text);
    Task DeleteAsync(Guid id);
}