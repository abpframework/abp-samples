using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace GymWorkoutPlanner.Services.Dtos.WorkoutPlans;

public class WorkoutPlanDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    public List<WorkoutPlanExerciseDto> Exercises { get; set; } = [];
}
