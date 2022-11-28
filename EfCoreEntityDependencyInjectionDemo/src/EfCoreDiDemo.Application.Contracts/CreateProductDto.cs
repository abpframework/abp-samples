using System.ComponentModel.DataAnnotations;

namespace EfCoreDiDemo;

public class CreateProductDto
{
    [Required]
    public string ProductCode { get; set; }
    
    [Required]
    public string Name { get; set; }
}