using System.ComponentModel.DataAnnotations;

namespace ModularCrm.Catalog;

public class ProductCreationDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Range(0, int.MaxValue)]
    public int StockCount { get; set; }
}
