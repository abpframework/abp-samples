using MyCompanyName.MyProjectName.Application.Todos.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace MyCompanyName.MyProjectName.Application.Todos;

public interface ITodoAppService : ICrudAppService<TodoDto, TodoDto, Guid, PagedAndSortedResultRequestDto, CreateTodoDto, UpdateTodoDto>
{
    
}