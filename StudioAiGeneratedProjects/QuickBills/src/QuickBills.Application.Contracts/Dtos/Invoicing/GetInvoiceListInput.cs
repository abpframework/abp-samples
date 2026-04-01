using Volo.Abp.Application.Dtos;

namespace QuickBills.Dtos.Invoicing;

/// <summary>
/// Input DTO for paginated invoice list queries.
/// </summary>
public class GetInvoiceListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public Guid? CustomerId { get; set; }
}
