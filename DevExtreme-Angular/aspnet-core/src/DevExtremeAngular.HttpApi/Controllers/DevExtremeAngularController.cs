using DevExtremeAngular.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DevExtremeAngular.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DevExtremeAngularController : AbpController
    {
        protected DevExtremeAngularController()
        {
            LocalizationResource = typeof(DevExtremeAngularResource);
        }
    }
}