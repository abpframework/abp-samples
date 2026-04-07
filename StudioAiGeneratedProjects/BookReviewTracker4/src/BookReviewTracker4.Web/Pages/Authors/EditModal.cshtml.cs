using System;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages.Authors;

public class EditModalModel : AbpPageModel
{
    [HiddenInput]
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    [BindProperty]
    public CreateUpdateAuthorDto Author { get; set; } = new();

    private readonly AuthorAppService _authorAppService;

    public EditModalModel(AuthorAppService authorAppService)
    {
        _authorAppService = authorAppService;
    }

    public async Task OnGetAsync()
    {
        var authorDto = await _authorAppService.GetAsync(Id);
        Author = new CreateUpdateAuthorDto
        {
            Name = authorDto.Name,
            Bio = authorDto.Bio
        };
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _authorAppService.UpdateAsync(Id, Author);
        return NoContent();
    }
}
