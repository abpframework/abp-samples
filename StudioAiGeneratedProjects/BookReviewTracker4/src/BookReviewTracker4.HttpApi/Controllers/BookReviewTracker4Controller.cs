using BookReviewTracker4.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace BookReviewTracker4.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class BookReviewTracker4Controller : AbpControllerBase
{
    protected BookReviewTracker4Controller()
    {
        LocalizationResource = typeof(BookReviewTracker4Resource);
    }
}
