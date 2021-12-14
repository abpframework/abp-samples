using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.MyProjectName.Services.Dtos;

public class CreateTodoDto
{
    [Required]
    public string Name { get; set; }
}