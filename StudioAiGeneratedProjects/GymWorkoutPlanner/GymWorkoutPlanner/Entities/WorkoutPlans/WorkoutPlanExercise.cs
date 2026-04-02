using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace GymWorkoutPlanner.Entities.WorkoutPlans;

public class WorkoutPlanExercise : AuditedEntity<Guid>
{
    public Guid WorkoutPlanId { get; set; }

    public Guid ExerciseId { get; set; }

    public int Order { get; set; }

    public int Sets { get; set; }

    public int Repetitions { get; set; }

    public int RestSeconds { get; set; }

    public string? Notes { get; set; }
}
