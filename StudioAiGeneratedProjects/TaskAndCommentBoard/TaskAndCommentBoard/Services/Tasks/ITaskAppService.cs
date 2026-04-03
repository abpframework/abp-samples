using System;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TaskAndCommentBoard.Services.Tasks;

public interface ITaskAppService :
    ICrudAppService<
        TaskDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateTaskDto>
{
}
