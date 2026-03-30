using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalBudget.Services.Categories;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PersonalBudget.Pages.Categories;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateCategoryDto Category { get; set; } = new();

    private readonly ICategoryAppService _categoryAppService;

    public CreateModalModel(ICategoryAppService categoryAppService)
    {
        _categoryAppService = categoryAppService;
    }

    public void OnGet()
    {
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _categoryAppService.CreateAsync(Category);
        return NoContent();
    }
}
