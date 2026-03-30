using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalBudget.Services.Expenses;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PersonalBudget.Pages.Expenses;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateExpenseDto Expense { get; set; } = new();

    public List<CategoryLookupDto> Categories { get; set; } = new();

    private readonly IExpenseAppService _expenseAppService;

    public CreateModalModel(IExpenseAppService expenseAppService)
    {
        _expenseAppService = expenseAppService;
    }

    public async Task OnGetAsync()
    {
        Categories = await _expenseAppService.GetCategoryLookupAsync();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _expenseAppService.CreateAsync(Expense);
        return NoContent();
    }
}
