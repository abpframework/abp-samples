using Volo.Abp.Application.Services;
using TravelPlanner.Localization;

namespace TravelPlanner.Services;

/* Inherit your application services from this class. */
public abstract class TravelPlannerAppService : ApplicationService
{
    protected TravelPlannerAppService()
    {
        LocalizationResource = typeof(TravelPlannerResource);
    }
}