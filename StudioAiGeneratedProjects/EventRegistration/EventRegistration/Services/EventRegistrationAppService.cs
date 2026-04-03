using Volo.Abp.Application.Services;
using EventRegistration.Localization;

namespace EventRegistration.Services;

/* Inherit your application services from this class. */
public abstract class EventRegistrationAppService : ApplicationService
{
    protected EventRegistrationAppService()
    {
        LocalizationResource = typeof(EventRegistrationResource);
    }
}