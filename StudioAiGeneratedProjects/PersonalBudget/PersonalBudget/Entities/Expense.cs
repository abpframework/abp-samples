using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace PersonalBudget.Entities;

public class Expense : AuditedAggregateRoot<Guid>
{
    public Guid CategoryId { get; private set; }
    public string Description { get; private set; }
    public decimal Amount { get; private set; }
    public DateTime Date { get; private set; }
    public string? Notes { get; private set; }

    protected Expense()
    {
        // For MongoDB ORM
    }

    public Expense(Guid id, Guid categoryId, string description, decimal amount, DateTime date, string? notes = null)
        : base(id)
    {
        CategoryId = categoryId;
        SetDescription(description);
        SetAmount(amount);
        Date = date;
        Notes = notes;
    }

    public void SetDescription(string description)
    {
        Description = Check.NotNullOrWhiteSpace(description, nameof(description), maxLength: ExpenseConsts.MaxDescriptionLength);
    }

    public void SetAmount(decimal amount)
    {
        if (amount <= 0)
        {
            throw new BusinessException("PersonalBudget:AmountMustBePositive")
                .WithData("Amount", amount);
        }
        Amount = amount;
    }

    public void SetDate(DateTime date)
    {
        Date = date;
    }

    public void SetNotes(string? notes)
    {
        if (notes != null && notes.Length > ExpenseConsts.MaxNotesLength)
        {
            throw new BusinessException("PersonalBudget:NotesTooLong");
        }
        Notes = notes;
    }

    public void SetCategoryId(Guid categoryId)
    {
        CategoryId = categoryId;
    }
}

public static class ExpenseConsts
{
    public const int MaxDescriptionLength = 500;
    public const int MaxNotesLength = 1000;
}
