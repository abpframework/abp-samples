using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using GymWorkoutPlanner.Entities.Exercises;
using GymWorkoutPlanner.Entities.WorkoutPlans;
using GymWorkoutPlanner.Permissions;
using GymWorkoutPlanner.Services.Dtos.WorkoutPlans;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace GymWorkoutPlanner.Services.WorkoutPlans;

[Authorize(GymWorkoutPlannerPermissions.WorkoutPlans.Default)]
public class WorkoutPlanAppService : ApplicationService, IWorkoutPlanAppService
{
    private readonly IRepository<WorkoutPlan, Guid> _workoutPlanRepository;
    private readonly IRepository<WorkoutPlanExercise, Guid> _workoutPlanExerciseRepository;
    private readonly IRepository<Exercise, Guid> _exerciseRepository;

    public WorkoutPlanAppService(
        IRepository<WorkoutPlan, Guid> workoutPlanRepository,
        IRepository<WorkoutPlanExercise, Guid> workoutPlanExerciseRepository,
        IRepository<Exercise, Guid> exerciseRepository)
    {
        _workoutPlanRepository = workoutPlanRepository;
        _workoutPlanExerciseRepository = workoutPlanExerciseRepository;
        _exerciseRepository = exerciseRepository;
    }

    public async Task<WorkoutPlanDto> GetAsync(Guid id)
    {
        var plan = await _workoutPlanRepository.GetAsync(id);
        return await BuildWorkoutPlanDtoAsync(plan);
    }

    public async Task<PagedResultDto<WorkoutPlanDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _workoutPlanRepository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var plans = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var items = new List<WorkoutPlanDto>();
        foreach (var plan in plans)
        {
            items.Add(await BuildWorkoutPlanDtoAsync(plan));
        }

        return new PagedResultDto<WorkoutPlanDto>(totalCount, items);
    }

    [Authorize(GymWorkoutPlannerPermissions.WorkoutPlans.Create)]
    public async Task<WorkoutPlanDto> CreateAsync(CreateUpdateWorkoutPlanDto input)
    {
        await ValidateInputAsync(input);

        var plan = new WorkoutPlan
        {
            Name = input.Name,
            Description = input.Description
        };

        await _workoutPlanRepository.InsertAsync(plan, autoSave: true);
        await ReplacePlanExercisesAsync(plan.Id, input.Exercises);

        return await GetAsync(plan.Id);
    }

    [Authorize(GymWorkoutPlannerPermissions.WorkoutPlans.Edit)]
    public async Task<WorkoutPlanDto> UpdateAsync(Guid id, CreateUpdateWorkoutPlanDto input)
    {
        await ValidateInputAsync(input);

        var plan = await _workoutPlanRepository.GetAsync(id);
        plan.Name = input.Name;
        plan.Description = input.Description;

        await _workoutPlanRepository.UpdateAsync(plan, autoSave: true);
        await ReplacePlanExercisesAsync(id, input.Exercises);

        return await GetAsync(id);
    }

    [Authorize(GymWorkoutPlannerPermissions.WorkoutPlans.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _workoutPlanRepository.DeleteAsync(id, autoSave: true);
    }

    private async Task ReplacePlanExercisesAsync(Guid workoutPlanId, List<WorkoutPlanExerciseDto> inputExercises)
    {
        var existing = await AsyncExecuter.ToListAsync(
            (await _workoutPlanExerciseRepository.GetQueryableAsync())
                .Where(x => x.WorkoutPlanId == workoutPlanId)
        );

        if (existing.Any())
        {
            await _workoutPlanExerciseRepository.DeleteManyAsync(existing, autoSave: true);
        }

        var entities = inputExercises
            .OrderBy(x => x.Order)
            .Select(x => new WorkoutPlanExercise
            {
                WorkoutPlanId = workoutPlanId,
                ExerciseId = x.ExerciseId,
                Order = x.Order,
                Sets = x.Sets,
                Repetitions = x.Repetitions,
                RestSeconds = x.RestSeconds,
                Notes = x.Notes
            })
            .ToList();

        if (entities.Any())
        {
            await _workoutPlanExerciseRepository.InsertManyAsync(entities, autoSave: true);
        }
    }

    private async Task<WorkoutPlanDto> BuildWorkoutPlanDtoAsync(WorkoutPlan plan)
    {
        var lines = await AsyncExecuter.ToListAsync(
            (await _workoutPlanExerciseRepository.GetQueryableAsync())
                .Where(x => x.WorkoutPlanId == plan.Id)
                .OrderBy(x => x.Order)
        );

        var exerciseIds = lines.Select(x => x.ExerciseId).Distinct().ToList();
        var exercises = await AsyncExecuter.ToListAsync(
            (await _exerciseRepository.GetQueryableAsync())
                .Where(x => exerciseIds.Contains(x.Id))
        );

        var exerciseNameById = exercises.ToDictionary(x => x.Id, x => x.Name);

        return new WorkoutPlanDto
        {
            Id = plan.Id,
            Name = plan.Name,
            Description = plan.Description,
            CreationTime = plan.CreationTime,
            CreatorId = plan.CreatorId,
            LastModificationTime = plan.LastModificationTime,
            LastModifierId = plan.LastModifierId,
            Exercises = lines.Select(line => new WorkoutPlanExerciseDto
            {
                Id = line.Id,
                ExerciseId = line.ExerciseId,
                ExerciseName = exerciseNameById.GetValueOrDefault(line.ExerciseId),
                Order = line.Order,
                Sets = line.Sets,
                Repetitions = line.Repetitions,
                RestSeconds = line.RestSeconds,
                Notes = line.Notes
            }).ToList()
        };
    }

    private async Task ValidateInputAsync(CreateUpdateWorkoutPlanDto input)
    {
        if (input.Exercises is null || input.Exercises.Count == 0)
        {
            throw new UserFriendlyException(L["WorkoutPlanShouldHaveAtLeastOneExercise"]);
        }

        if (input.Exercises.Any(x => x.Order <= 0 || x.Sets <= 0 || x.Repetitions <= 0 || x.RestSeconds < 0))
        {
            throw new UserFriendlyException(L["WorkoutPlanExerciseValuesMustBePositive"]);
        }

        var duplicateOrders = input.Exercises
            .GroupBy(x => x.Order)
            .Where(g => g.Count() > 1)
            .Select(g => g.Key)
            .ToList();

        if (duplicateOrders.Count != 0)
        {
            throw new UserFriendlyException(L["WorkoutPlanOrderValuesMustBeUnique"]);
        }

        var duplicateExercises = input.Exercises
            .GroupBy(x => x.ExerciseId)
            .Where(g => g.Count() > 1)
            .Select(g => g.Key)
            .ToList();

        if (duplicateExercises.Count != 0)
        {
            throw new UserFriendlyException(L["WorkoutPlanExerciseCannotRepeat"]);
        }

        var requestedExerciseIds = input.Exercises.Select(x => x.ExerciseId).Distinct().ToList();
        var existingExerciseCount = await AsyncExecuter.CountAsync(
            (await _exerciseRepository.GetQueryableAsync())
                .Where(x => requestedExerciseIds.Contains(x.Id))
        );

        if (existingExerciseCount != requestedExerciseIds.Count)
        {
            throw new UserFriendlyException(L["SomeExercisesNotFound"]);
        }
    }
}
