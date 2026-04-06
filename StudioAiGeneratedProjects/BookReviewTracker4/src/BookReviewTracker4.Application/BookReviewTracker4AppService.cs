using BookReviewTracker4.Localization;
using Volo.Abp.Application.Services;

namespace BookReviewTracker4;

/* Inherit your application services from this class.
 */
public abstract class BookReviewTracker4AppService : ApplicationService
{
    protected BookReviewTracker4AppService()
    {
        LocalizationResource = typeof(BookReviewTracker4Resource);
    }
}
