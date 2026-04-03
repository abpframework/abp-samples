using System.ComponentModel.DataAnnotations;

namespace BillMaster.Invoices;

public class CreateUpdateInvoiceItemDto
{
    [Required]
    [StringLength(500)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than 0")]
    public int Quantity { get; set; }

    [Required]
    [Range(typeof(decimal), "0.01", "79228162514264337593543950335", ErrorMessage = "Unit Price must be greater than 0")]
    public decimal UnitPrice { get; set; }
}
