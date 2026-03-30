using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalBudget.Services.Expenses;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PersonalBudget.Pages.Expenses;

public class EditModalModel : AbpPageModel
{
    [HiddenInput]
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    [BindProperty]
    public CreateUpdateExpenseDto Expense { get; set; } = new();

    public List<CategoryLookupDto> Categories { get; set; } = new();

    private readonly IExpenseAppService _expenseAppService;

    public EditModalModel(IExpenseAppService expenseAppService)
    {
        _expenseAppService = expenseAppService;
    }

    public async Task OnGetAsync()
    {
        Categories = await _expenseAppService.GetCategoryLookupAsync();

        var dto = await _expenseAppService.GetAsync(Id);
        Expense = new CreateUpdateExpenseDto
        {
            CategoryId = dto.CategoryId,
            Description = dto.Description,
            Amount = dto.Amount,
            Date = dto.Date,
            Notes = dto.Notes
        };
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _expenseAppService.UpdateAsync(Id, Expense);
        return NoContent();
    }
}
