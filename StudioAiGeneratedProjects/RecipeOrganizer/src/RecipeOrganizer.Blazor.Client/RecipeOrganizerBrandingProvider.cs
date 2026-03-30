using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using RecipeOrganizer.Localization;

namespace RecipeOrganizer.Blazor.Client;

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
