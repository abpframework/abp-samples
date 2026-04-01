namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for creating or updating a customer.
/// </summary>
public class CreateUpdateCustomerDto
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
}
