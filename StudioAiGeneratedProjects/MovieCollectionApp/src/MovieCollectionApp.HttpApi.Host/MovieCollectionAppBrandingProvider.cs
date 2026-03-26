using Microsoft.Extensions.Localization;
using MovieCollectionApp.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace MovieCollectionApp;

[Dependency(ReplaceServices = true)]
public class MovieCollectionAppBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<MovieCollectionAppResource> _localizer;

    public MovieCollectionAppBrandingProvider(IStringLocalizer<MovieCollectionAppResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
