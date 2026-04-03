using System;
using System.Threading.Tasks;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TaskAndCommentBoard.Services.Tasks;

public interface ITaskCommentAppService : IApplicationService
{
    Task<ListResultDto<TaskCommentDto>> GetListByTaskAsync(Guid taskId);

    Task<TaskCommentDto> CreateAsync(Guid taskId, CreateTaskCommentDto input);

    Task DeleteAsync(Guid id);
}
