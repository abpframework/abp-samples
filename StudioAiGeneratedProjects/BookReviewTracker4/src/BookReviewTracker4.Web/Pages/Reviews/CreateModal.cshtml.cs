using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Books;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages.Reviews;

public class CreateModalModel : AbpPageModel
{
    [BindProperty]
    public CreateUpdateReviewDto Review { get; set; } = new();

    public List<SelectListItem> Books { get; set; } = new();
    public List<SelectListItem> Ratings { get; set; } = new();

    private readonly ReviewAppService _reviewAppService;
    private readonly BookAppService _bookAppService;

    public CreateModalModel(
        ReviewAppService reviewAppService,
        BookAppService bookAppService)
    {
        _reviewAppService = reviewAppService;
        _bookAppService = bookAppService;
    }

    public async Task OnGetAsync()
    {
        Review = new CreateUpdateReviewDto
        {
            ReviewDate = DateTime.Now
        };

        var books = await _bookAppService.GetListAsync(new GetBookListInput { MaxResultCount = 1000 });
        Books = books.Items.Select(b => new SelectListItem(b.Title, b.Id.ToString())).ToList();

        Ratings = new List<SelectListItem>
        {
            new("1 - Poor", "1"),
            new("2 - Fair", "2"),
            new("3 - Good", "3"),
            new("4 - Very Good", "4"),
            new("5 - Excellent", "5")
        };
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await _reviewAppService.CreateAsync(Review);
        return NoContent();
    }
}
