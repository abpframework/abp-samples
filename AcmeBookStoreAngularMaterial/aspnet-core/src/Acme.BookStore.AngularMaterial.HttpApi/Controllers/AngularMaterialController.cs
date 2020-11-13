using Acme.BookStore.AngularMaterial.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Acme.BookStore.AngularMaterial.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class AngularMaterialController : AbpController
    {
        protected AngularMaterialController()
        {
            LocalizationResource = typeof(AngularMaterialResource);
        }
    }
}