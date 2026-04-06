using BookReviewTracker4.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace BookReviewTracker4.Web.Pages;

public abstract class BookReviewTracker4PageModel : AbpPageModel
{
    protected BookReviewTracker4PageModel()
    {
        LocalizationResourceType = typeof(BookReviewTracker4Resource);
    }
}
