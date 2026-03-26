using Microsoft.Extensions.Localization;
using GymWorkoutPlanner.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace GymWorkoutPlanner;

[Dependency(ReplaceServices = true)]
public class GymWorkoutPlannerBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<GymWorkoutPlannerResource> _localizer;

    public GymWorkoutPlannerBrandingProvider(IStringLocalizer<GymWorkoutPlannerResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}