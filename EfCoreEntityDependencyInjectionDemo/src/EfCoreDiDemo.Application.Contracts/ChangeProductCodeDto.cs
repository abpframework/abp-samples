using System;
using System.ComponentModel.DataAnnotations;

namespace EfCoreDiDemo;

public class ChangeProductCodeDto
{
    public Guid Id { get; set; }
    
    [Required]
    public string NewProductCode { get; set; }
}