using Microsoft.Extensions.Localization;
using RecipeOrganizer.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace RecipeOrganizer.Blazor;

[Dependency(ReplaceServices = true)]
public class RecipeOrganizerBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<RecipeOrganizerResource> _localizer;

    public RecipeOrganizerBrandingProvider(IStringLocalizer<RecipeOrganizerResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
