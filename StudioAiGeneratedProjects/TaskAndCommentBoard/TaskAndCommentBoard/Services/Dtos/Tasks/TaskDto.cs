using System;
using Volo.Abp.Application.Dtos;

namespace TaskAndCommentBoard.Services.Dtos.Tasks;

public class TaskDto : FullAuditedEntityDto<Guid>
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public bool IsClosed { get; set; }
}
