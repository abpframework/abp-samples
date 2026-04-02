using TravelPlanner.Localization;
using Volo.Abp.AspNetCore.Components;

namespace TravelPlanner;

public abstract class TravelPlannerComponentBase : AbpComponentBase
{
    protected TravelPlannerComponentBase()
    {
        LocalizationResource = typeof(TravelPlannerResource);
    }
}
