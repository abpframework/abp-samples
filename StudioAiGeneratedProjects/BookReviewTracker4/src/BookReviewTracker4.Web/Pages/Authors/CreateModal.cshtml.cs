using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages.Authors;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateAuthorDto Author { get; set; } = new();

    private readonly AuthorAppService _authorAppService;

    public CreateModalModel(AuthorAppService authorAppService)
    {
        _authorAppService = authorAppService;
    }

    public void OnGet()
    {
        Author = new CreateUpdateAuthorDto();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _authorAppService.CreateAsync(Author);
        return NoContent();
    }
}
