using System;
using System.ComponentModel.DataAnnotations;

namespace GymWorkoutPlanner.Services.Dtos.WorkoutPlans;

public class WorkoutPlanExerciseDto
{
    public Guid Id { get; set; }

    [Required]
    public Guid ExerciseId { get; set; }

    public string? ExerciseName { get; set; }

    [Range(1, int.MaxValue)]
    public int Order { get; set; }

    [Range(1, int.MaxValue)]
    public int Sets { get; set; }

    [Range(1, int.MaxValue)]
    public int Repetitions { get; set; }

    [Range(0, int.MaxValue)]
    public int RestSeconds { get; set; }

    [StringLength(1024)]
    public string? Notes { get; set; }
}
