using System;

namespace PersonalBudget.Services.Expenses;

public class CategoryLookupDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
