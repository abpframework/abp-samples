using Volo.Abp.Application.Services;
using aspnet.Localization;

namespace aspnet.Services;

/* Inherit your application services from this class. */
public abstract class aspnetAppService : ApplicationService
{
    protected aspnetAppService()
    {
        LocalizationResource = typeof(aspnetResource);
    }
}