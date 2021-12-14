using Volo.Abp.Application.Dtos;

namespace MyCompanyName.MyProjectName.Application.Todos.Dtos;

public class TodoDto : EntityDto<Guid>
{
    public string Name { get; set; }
}