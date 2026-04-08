using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages.Books;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateBookDto Book { get; set; } = new();

    public List<SelectListItem> Authors { get; set; } = new();

    private readonly BookAppService _bookAppService;
    private readonly AuthorAppService _authorAppService;

    public CreateModalModel(
        BookAppService bookAppService,
        AuthorAppService authorAppService)
    {
        _bookAppService = bookAppService;
        _authorAppService = authorAppService;
    }

    public async Task OnGetAsync()
    {
        Book = new CreateUpdateBookDto();

        var authors = await _authorAppService.GetListAsync(new GetAuthorListInput { MaxResultCount = 1000 });
        Authors = authors.Items.Select(a => new SelectListItem(a.Name, a.Id.ToString())).ToList();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _bookAppService.CreateAsync(Book);
        return NoContent();
    }
}
