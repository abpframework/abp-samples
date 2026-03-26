using System;
using Volo.Abp.Application.Dtos;

namespace GymWorkoutPlanner.Services.Dtos.Exercises;

public class ExerciseDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;

    public string TargetMuscleGroup { get; set; } = string.Empty;

    public string? Description { get; set; }
}
