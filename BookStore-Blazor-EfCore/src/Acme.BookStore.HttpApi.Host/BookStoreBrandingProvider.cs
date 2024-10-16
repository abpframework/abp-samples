using Microsoft.Extensions.Localization;
using Acme.BookStore.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Acme.BookStore;

[Dependency(ReplaceServices = true)]
public class BookStoreBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<BookStoreResource> _localizer;

    public BookStoreBrandingProvider(IStringLocalizer<BookStoreResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
