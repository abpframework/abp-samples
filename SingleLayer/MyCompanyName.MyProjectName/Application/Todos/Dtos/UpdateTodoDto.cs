using System.ComponentModel.DataAnnotations;

namespace MyCompanyName.MyProjectName.Application.Todos.Dtos;

public class UpdateTodoDto
{
    [Required]
    public string Name { get; set; }
}