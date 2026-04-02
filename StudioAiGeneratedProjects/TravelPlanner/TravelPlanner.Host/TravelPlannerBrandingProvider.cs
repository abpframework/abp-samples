using Microsoft.Extensions.Localization;
using TravelPlanner.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace TravelPlanner;

[Dependency(ReplaceServices = true)]
public class TravelPlannerBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<TravelPlannerResource> _localizer;

    public TravelPlannerBrandingProvider(IStringLocalizer<TravelPlannerResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}