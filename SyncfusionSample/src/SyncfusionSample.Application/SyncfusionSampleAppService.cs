using SyncfusionSample.Localization;
using Volo.Abp.Application.Services;

namespace SyncfusionSample
{
    /* Inherit your application services from this class.
     */
    public abstract class SyncfusionSampleAppService : ApplicationService
    {
        protected SyncfusionSampleAppService()
        {
            LocalizationResource = typeof(SyncfusionSampleResource);
        }
    }
}
