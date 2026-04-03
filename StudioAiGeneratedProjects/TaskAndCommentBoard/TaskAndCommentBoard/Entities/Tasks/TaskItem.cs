using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace TaskAndCommentBoard.Entities.Tasks;

public class TaskItem : FullAuditedAggregateRoot<Guid>
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public bool IsClosed { get; set; }

    public ICollection<TaskComment> Comments { get; set; } = new List<TaskComment>();
}
