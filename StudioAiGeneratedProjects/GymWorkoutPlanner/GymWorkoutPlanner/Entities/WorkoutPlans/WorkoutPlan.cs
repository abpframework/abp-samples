using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace GymWorkoutPlanner.Entities.WorkoutPlans;

public class WorkoutPlan : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }
}
