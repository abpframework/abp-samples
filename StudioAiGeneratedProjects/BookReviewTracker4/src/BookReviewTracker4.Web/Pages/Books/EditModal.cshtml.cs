using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages.Books;

public class EditModalModel : AbpPageModel
{
    [HiddenInput]
    [BindProperty(SupportsGet = true)]
    public Guid Id { get; set; }

    [BindProperty]
    public CreateUpdateBookDto Book { get; set; } = new();

    public List<SelectListItem> Authors { get; set; } = new();

    private readonly BookAppService _bookAppService;
    private readonly AuthorAppService _authorAppService;

    public EditModalModel(
        BookAppService bookAppService,
        AuthorAppService authorAppService)
    {
        _bookAppService = bookAppService;
        _authorAppService = authorAppService;
    }

    public async Task OnGetAsync()
    {
        var bookDto = await _bookAppService.GetAsync(Id);
        Book = new CreateUpdateBookDto
        {
            Title = bookDto.Title,
            Description = bookDto.Description,
            PublishDate = bookDto.PublishDate,
            AuthorId = bookDto.AuthorId
        };

        var authors = await _authorAppService.GetListAsync(new GetAuthorListInput { MaxResultCount = 1000 });
        Authors = authors.Items.Select(a => new SelectListItem(a.Name, a.Id.ToString())).ToList();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _bookAppService.UpdateAsync(Id, Book);
        return NoContent();
    }
}
