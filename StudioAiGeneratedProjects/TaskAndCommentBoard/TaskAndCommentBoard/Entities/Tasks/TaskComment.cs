using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace TaskAndCommentBoard.Entities.Tasks;

public class TaskComment : CreationAuditedEntity<Guid>
{
    public Guid TaskId { get; set; }

    public string Content { get; set; } = string.Empty;
}
