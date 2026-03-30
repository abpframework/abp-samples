using System.Collections.Generic;
using PersonalBudget.Entities;
using PersonalBudget.Services.Categories;
using PersonalBudget.Services.Expenses;
using Riok.Mapperly.Abstractions;
using Volo.Abp.DependencyInjection;

namespace PersonalBudget.ObjectMapping;

[Mapper]
public partial class PersonalBudgetWebMappers : ITransientDependency
{
    // Category → CategoryDto
    [MapperIgnoreSource(nameof(Category.ExtraProperties))]
    [MapperIgnoreSource(nameof(Category.ConcurrencyStamp))]
    public partial CategoryDto Map(Category source);

    [MapperIgnoreSource(nameof(Category.ExtraProperties))]
    [MapperIgnoreSource(nameof(Category.ConcurrencyStamp))]
    public partial List<CategoryDto> MapCategoryList(List<Category> source);

    // Category → CategoryLookupDto (only Id and Name)
    public CategoryLookupDto MapToLookup(Category source)
        => new() { Id = source.Id, Name = source.Name };

    // Expense → ExpenseDto (CategoryName is populated manually after mapping)
    [MapperIgnoreSource(nameof(Expense.ExtraProperties))]
    [MapperIgnoreSource(nameof(Expense.ConcurrencyStamp))]
    [MapperIgnoreTarget(nameof(ExpenseDto.CategoryName))]
    public partial ExpenseDto Map(Expense source);

    [MapperIgnoreSource(nameof(Expense.ExtraProperties))]
    [MapperIgnoreSource(nameof(Expense.ConcurrencyStamp))]
    [MapperIgnoreTarget(nameof(ExpenseDto.CategoryName))]
    public partial List<ExpenseDto> MapExpenseList(List<Expense> source);
}
