using OrganizationUnitSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OrganizationUnitSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class OrganizationUnitSampleController : AbpController
    {
        protected OrganizationUnitSampleController()
        {
            LocalizationResource = typeof(OrganizationUnitSampleResource);
        }
    }
}