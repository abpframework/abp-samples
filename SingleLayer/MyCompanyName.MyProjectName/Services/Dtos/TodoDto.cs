using Volo.Abp.Application.Dtos;

namespace MyCompanyName.MyProjectName.Services.Dtos;

public class TodoDto : EntityDto<Guid>
{
    public string Text { get; set; }
}