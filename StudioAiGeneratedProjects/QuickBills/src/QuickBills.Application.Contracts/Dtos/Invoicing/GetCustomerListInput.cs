using Volo.Abp.Application.Dtos;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// Input DTO for paginated customer list queries.
/// </summary>
public class GetCustomerListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
