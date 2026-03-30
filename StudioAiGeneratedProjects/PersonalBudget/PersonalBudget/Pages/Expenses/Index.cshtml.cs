using System.Collections.Generic;
using System.Threading.Tasks;
using PersonalBudget.Services.Expenses;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PersonalBudget.Pages.Expenses;

public class IndexModel : AbpPageModel
{
    public List<CategoryLookupDto> Categories { get; set; } = new();

    private readonly IExpenseAppService _expenseAppService;

    public IndexModel(IExpenseAppService expenseAppService)
    {
        _expenseAppService = expenseAppService;
    }

    public async Task OnGetAsync()
    {
        Categories = await _expenseAppService.GetCategoryLookupAsync();
    }
}
