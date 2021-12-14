using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.MyProjectName.Services.Dtos;

public class UpdateTodoDto
{
    [Required]
    public string Name { get; set; }
}