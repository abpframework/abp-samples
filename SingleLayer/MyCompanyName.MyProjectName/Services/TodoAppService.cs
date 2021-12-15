using MyCompanyName.MyProjectName.Entities;
using MyCompanyName.MyProjectName.Services.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace MyCompanyName.MyProjectName.Services;

public class TodoAppService : ApplicationService
{
    private readonly IRepository<Todo, Guid> _todoRepository;

    public TodoAppService(IRepository<Todo, Guid> todoRepository)
    {
        _todoRepository = todoRepository;
    }

    public async Task<List<TodoDto>> GetListAsync()
    {
        var items = await _todoRepository.GetListAsync();
        
        return ObjectMapper.Map<List<Todo>, List<TodoDto>>(items);
    }

    public async Task<TodoDto> CreateAsync(string text)
    {
        var todoItem = await _todoRepository.InsertAsync(
            new Todo {Text = text}
        );

        return ObjectMapper.Map<Todo, TodoDto>(todoItem);
    }

    public Task DeleteAsync(Guid id)
    {
        return _todoRepository.DeleteAsync(id);
    }
}