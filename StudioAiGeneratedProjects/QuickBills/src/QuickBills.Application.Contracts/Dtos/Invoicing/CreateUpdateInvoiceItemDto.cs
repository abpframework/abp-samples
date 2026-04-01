namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for creating or updating an invoice item.
/// </summary>
public class CreateUpdateInvoiceItemDto
{
    public string Description { get; set; } = string.Empty;
    public decimal Quantity { get; set; }
    public decimal UnitPrice { get; set; }
}
