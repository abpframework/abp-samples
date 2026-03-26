using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace GymWorkoutPlanner.Entities.Exercises;

public class Exercise : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; } = string.Empty;

    public string TargetMuscleGroup { get; set; } = string.Empty;

    public string? Description { get; set; }
}
