using Volo.Abp.Application.Dtos;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// DTO for reading a customer.
/// </summary>
public class CustomerDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
}
