using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.MyProjectName.Application.Todos.Dtos;

public class CreateTodoDto
{
    [Required]
    public string Name { get; set; }
}