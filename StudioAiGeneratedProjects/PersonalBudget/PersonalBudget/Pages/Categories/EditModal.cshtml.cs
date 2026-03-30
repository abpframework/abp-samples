using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalBudget.Services.Categories;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PersonalBudget.Pages.Categories;

public class EditModalModel : AbpPageModel
{
    [HiddenInput]
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    [BindProperty]
    public CreateUpdateCategoryDto Category { get; set; } = new();

    private readonly ICategoryAppService _categoryAppService;

    public EditModalModel(ICategoryAppService categoryAppService)
    {
        _categoryAppService = categoryAppService;
    }

    public async Task OnGetAsync()
    {
        var dto = await _categoryAppService.GetAsync(Id);
        Category = new CreateUpdateCategoryDto
        {
            Name = dto.Name,
            Description = dto.Description,
            Icon = dto.Icon
        };
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _categoryAppService.UpdateAsync(Id, Category);
        return NoContent();
    }
}
