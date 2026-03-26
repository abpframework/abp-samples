using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using GymWorkoutPlanner.Services.Dtos.Exercises;

namespace GymWorkoutPlanner.Services.Exercises;

public interface IExerciseAppService :
    ICrudAppService<
        ExerciseDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateExerciseDto>
{
}
