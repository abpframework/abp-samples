using MyCompanyName.MyProjectName.Entities.Todos;
using MyCompanyName.MyProjectName.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace MyCompanyName.MyProjectName.Services;

public class TodoAppService : CrudAppService<Todo, TodoDto, TodoDto, Guid, PagedAndSortedResultRequestDto, CreateTodoDto, UpdateTodoDto>
{
    public TodoAppService(IRepository<Todo, Guid> repository) : base(repository)
    {
    }
}