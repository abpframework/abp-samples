using Volo.Abp.Application.Services;
using GymWorkoutPlanner.Localization;

namespace GymWorkoutPlanner.Services;

/* Inherit your application services from this class. */
public abstract class GymWorkoutPlannerAppService : ApplicationService
{
    protected GymWorkoutPlannerAppService()
    {
        LocalizationResource = typeof(GymWorkoutPlannerResource);
    }
}