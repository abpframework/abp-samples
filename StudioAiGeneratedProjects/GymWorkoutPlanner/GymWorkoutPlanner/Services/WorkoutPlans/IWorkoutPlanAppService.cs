using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using GymWorkoutPlanner.Services.Dtos.WorkoutPlans;

namespace GymWorkoutPlanner.Services.WorkoutPlans;

public interface IWorkoutPlanAppService :
    ICrudAppService<
        WorkoutPlanDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateWorkoutPlanDto>
{
}
