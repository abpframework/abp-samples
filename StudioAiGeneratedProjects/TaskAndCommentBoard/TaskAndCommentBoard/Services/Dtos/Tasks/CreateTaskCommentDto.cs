using System.ComponentModel.DataAnnotations;

namespace TaskAndCommentBoard.Services.Dtos.Tasks;

public class CreateTaskCommentDto
{
    [Required]
    [StringLength(2000)]
    public string Content { get; set; } = string.Empty;
}
