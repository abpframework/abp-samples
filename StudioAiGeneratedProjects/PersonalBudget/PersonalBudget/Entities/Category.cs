using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace PersonalBudget.Entities;

public class Category : AuditedAggregateRoot<Guid>
{
    public string Name { get; private set; }
    public string? Description { get; private set; }
    public string? Icon { get; private set; }

    protected Category()
    {
        // For MongoDB ORM
    }

    public Category(Guid id, string name, string? description = null, string? icon = null)
        : base(id)
    {
        SetName(name);
        Description = description;
        Icon = icon;
    }

    public void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(name, nameof(name), maxLength: CategoryConsts.MaxNameLength);
    }

    public void SetDescription(string? description)
    {
        if (description != null && description.Length > CategoryConsts.MaxDescriptionLength)
        {
            throw new BusinessException("PersonalBudget:DescriptionTooLong");
        }
        Description = description;
    }

    public void SetIcon(string? icon)
    {
        if (icon != null && icon.Length > CategoryConsts.MaxIconLength)
        {
            throw new BusinessException("PersonalBudget:IconTooLong");
        }
        Icon = icon;
    }
}

public static class CategoryConsts
{
    public const int MaxNameLength = 100;
    public const int MaxDescriptionLength = 500;
    public const int MaxIconLength = 50;
}
