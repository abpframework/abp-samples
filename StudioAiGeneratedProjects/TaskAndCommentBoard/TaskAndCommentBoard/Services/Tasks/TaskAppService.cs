using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using TaskAndCommentBoard.Entities.Tasks;
using TaskAndCommentBoard.Permissions;
using TaskAndCommentBoard.Services.Dtos.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TaskAndCommentBoard.Services.Tasks;

[Authorize(TaskAndCommentBoardPermissions.Tasks.Default)]
public class TaskAppService : ApplicationService, ITaskAppService
{
    private readonly IRepository<TaskItem, Guid> _taskRepository;

    public TaskAppService(IRepository<TaskItem, Guid> taskRepository)
    {
        _taskRepository = taskRepository;
    }

    public async Task<TaskDto> GetAsync(Guid id)
    {
        var taskItem = await _taskRepository.GetAsync(id);
        return ObjectMapper.Map<TaskItem, TaskDto>(taskItem);
    }

    public async Task<PagedResultDto<TaskDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _taskRepository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var taskItems = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<TaskDto>(
            totalCount,
            ObjectMapper.Map<List<TaskItem>, List<TaskDto>>(taskItems)
        );
    }

    [Authorize(TaskAndCommentBoardPermissions.Tasks.Create)]
    public async Task<TaskDto> CreateAsync(CreateUpdateTaskDto input)
    {
        var taskItem = ObjectMapper.Map<CreateUpdateTaskDto, TaskItem>(input);
        await _taskRepository.InsertAsync(taskItem);
        return ObjectMapper.Map<TaskItem, TaskDto>(taskItem);
    }

    [Authorize(TaskAndCommentBoardPermissions.Tasks.Edit)]
    public async Task<TaskDto> UpdateAsync(Guid id, CreateUpdateTaskDto input)
    {
        var taskItem = await _taskRepository.GetAsync(id);
        ObjectMapper.Map(input, taskItem);
        await _taskRepository.UpdateAsync(taskItem);
        return ObjectMapper.Map<TaskItem, TaskDto>(taskItem);
    }

    [Authorize(TaskAndCommentBoardPermissions.Tasks.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _taskRepository.DeleteAsync(id);
    }
}
