using System;
using Microsoft.AspNetCore.Authorization;
using GymWorkoutPlanner.Entities.Exercises;
using GymWorkoutPlanner.Permissions;
using GymWorkoutPlanner.Services.Dtos.Exercises;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace GymWorkoutPlanner.Services.Exercises;

[Authorize(GymWorkoutPlannerPermissions.Exercises.Default)]
public class ExerciseAppService : CrudAppService<
    Exercise,
    ExerciseDto,
    Guid,
    PagedAndSortedResultRequestDto,
    CreateUpdateExerciseDto>,
    IExerciseAppService
{
    public ExerciseAppService(IRepository<Exercise, Guid> repository)
        : base(repository)
    {
        GetPolicyName = GymWorkoutPlannerPermissions.Exercises.Default;
        GetListPolicyName = GymWorkoutPlannerPermissions.Exercises.Default;
        CreatePolicyName = GymWorkoutPlannerPermissions.Exercises.Create;
        UpdatePolicyName = GymWorkoutPlannerPermissions.Exercises.Edit;
        DeletePolicyName = GymWorkoutPlannerPermissions.Exercises.Delete;
    }
}
