using Volo.Abp.Domain.Entities;

namespace MyCompanyName.MyProjectName.Entities;

public class Todo : BasicAggregateRoot<Guid>
{
    public string Text { get; set; }
}