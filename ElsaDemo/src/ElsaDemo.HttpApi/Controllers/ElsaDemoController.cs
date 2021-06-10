using ElsaDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ElsaDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ElsaDemoController : AbpController
    {
        protected ElsaDemoController()
        {
            LocalizationResource = typeof(ElsaDemoResource);
        }
    }
}