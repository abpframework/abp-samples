using System.ComponentModel.DataAnnotations;

namespace TaskAndCommentBoard.Services.Dtos.Tasks;

public class CreateUpdateTaskDto
{
    [Required]
    [StringLength(128)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [StringLength(2000)]
    public string Description { get; set; } = string.Empty;

    public bool IsClosed { get; set; }
}
