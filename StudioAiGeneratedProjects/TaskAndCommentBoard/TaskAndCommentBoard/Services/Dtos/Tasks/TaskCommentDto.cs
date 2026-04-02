using System;
using Volo.Abp.Application.Dtos;

namespace TaskAndCommentBoard.Services.Dtos.Tasks;

public class TaskCommentDto : CreationAuditedEntityDto<Guid>
{
    public Guid TaskId { get; set; }

    public string Content { get; set; } = string.Empty;
}
