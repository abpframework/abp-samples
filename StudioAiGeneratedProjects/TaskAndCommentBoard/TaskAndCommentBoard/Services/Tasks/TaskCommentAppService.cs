using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using TaskAndCommentBoard.Entities.Tasks;
using TaskAndCommentBoard.Permissions;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TaskAndCommentBoard.Services.Tasks;

[Authorize(TaskAndCommentBoardPermissions.Comments.Default)]
public class TaskCommentAppService : ApplicationService, ITaskCommentAppService
{
    private readonly IRepository<TaskComment, Guid> _commentRepository;
    private readonly IRepository<TaskItem, Guid> _taskRepository;

    public TaskCommentAppService(
        IRepository<TaskComment, Guid> commentRepository,
        IRepository<TaskItem, Guid> taskRepository)
    {
        _commentRepository = commentRepository;
        _taskRepository = taskRepository;
    }

    public async Task<ListResultDto<TaskCommentDto>> GetListByTaskAsync(Guid taskId)
    {
        var queryable = await _commentRepository.GetQueryableAsync();
        var query = queryable
            .Where(x => x.TaskId == taskId)
            .OrderByDescending(x => x.CreationTime);

        var comments = await AsyncExecuter.ToListAsync(query);

        return new ListResultDto<TaskCommentDto>(
            ObjectMapper.Map<List<TaskComment>, List<TaskCommentDto>>(comments)
        );
    }

    [Authorize(TaskAndCommentBoardPermissions.Comments.Create)]
    public async Task<TaskCommentDto> CreateAsync(Guid taskId, CreateTaskCommentDto input)
    {
        await _taskRepository.GetAsync(taskId);

        var comment = new TaskComment
        {
            TaskId = taskId,
            Content = input.Content
        };

        await _commentRepository.InsertAsync(comment);

        return ObjectMapper.Map<TaskComment, TaskCommentDto>(comment);
    }

    [Authorize(TaskAndCommentBoardPermissions.Comments.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _commentRepository.DeleteAsync(id);
    }
}
