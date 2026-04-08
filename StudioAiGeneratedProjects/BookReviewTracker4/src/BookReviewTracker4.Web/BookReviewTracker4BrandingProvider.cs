using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using BookReviewTracker4.Localization;

namespace BookReviewTracker4.Web;

[Dependency(ReplaceServices = true)]
public class BookReviewTracker4BrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<BookReviewTracker4Resource> _localizer;

    public BookReviewTracker4BrandingProvider(IStringLocalizer<BookReviewTracker4Resource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
