using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GymWorkoutPlanner.Services.Dtos.WorkoutPlans;

public class CreateUpdateWorkoutPlanDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [StringLength(2048)]
    public string? Description { get; set; }

    [Required]
    [MinLength(1)]
    public List<WorkoutPlanExerciseDto> Exercises { get; set; } = [];
}
