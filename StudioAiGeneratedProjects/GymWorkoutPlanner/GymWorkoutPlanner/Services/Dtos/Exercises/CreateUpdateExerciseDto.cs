using System.ComponentModel.DataAnnotations;

namespace GymWorkoutPlanner.Services.Dtos.Exercises;

public class CreateUpdateExerciseDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [StringLength(64)]
    public string TargetMuscleGroup { get; set; } = string.Empty;

    [StringLength(1024)]
    public string? Description { get; set; }
}
