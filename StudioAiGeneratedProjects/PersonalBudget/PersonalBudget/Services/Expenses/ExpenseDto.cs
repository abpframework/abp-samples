using System;
using Volo.Abp.Application.Dtos;

namespace PersonalBudget.Services.Expenses;

public class ExpenseDto : AuditedEntityDto<Guid>
{
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
    public string? Notes { get; set; }
}
