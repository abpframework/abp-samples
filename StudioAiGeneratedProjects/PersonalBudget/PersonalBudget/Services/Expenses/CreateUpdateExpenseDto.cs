using System;
using System.ComponentModel.DataAnnotations;
using PersonalBudget.Entities;

namespace PersonalBudget.Services.Expenses;

public class CreateUpdateExpenseDto
{
    [Required]
    public Guid CategoryId { get; set; }

    [Required]
    [StringLength(ExpenseConsts.MaxDescriptionLength)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [Range(0.01, double.MaxValue, ErrorMessage = "Amount must be greater than 0")]
    public decimal Amount { get; set; }

    [Required]
    public DateTime Date { get; set; } = DateTime.Today;

    [StringLength(ExpenseConsts.MaxNotesLength)]
    public string? Notes { get; set; }
}
