using System;
using Volo.Abp.Application.Dtos;

namespace PersonalBudget.Services.Expenses;

public class GetExpenseListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public Guid? CategoryId { get; set; }
    public decimal? MinAmount { get; set; }
    public decimal? MaxAmount { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
}
