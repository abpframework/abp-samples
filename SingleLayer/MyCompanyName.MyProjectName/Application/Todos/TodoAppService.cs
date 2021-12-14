using MyCompanyName.MyProjectName.Application.Todos.Dtos;
using MyCompanyName.MyProjectName.Domain.Todos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace MyCompanyName.MyProjectName.Application.Todos;

public class TodoAppService : 
    CrudAppService<Todo, TodoDto, TodoDto, Guid, PagedAndSortedResultRequestDto, CreateTodoDto, UpdateTodoDto>,
    ITodoAppService
{
    public TodoAppService(IRepository<Todo, Guid> repository) : base(repository)
    {
    }

    protected override Todo MapToEntity(CreateTodoDto createInput)
    {
        return new Todo(GuidGenerator.Create(), createInput.Name);
    }

    protected override void MapToEntity(UpdateTodoDto updateInput, Todo entity)
    {
        entity.Name = updateInput.Name;
    }

    protected override TodoDto MapToGetOutputDto(Todo entity)
    {
        return new TodoDto
        {
            Id = entity.Id,
            Name = entity.Name
        };
    }

    protected override TodoDto MapToGetListOutputDto(Todo entity)
    {
        return new TodoDto
        {
            Id = entity.Id,
            Name = entity.Name
        };
    }
}