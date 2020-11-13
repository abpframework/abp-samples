using AngularMaterialUIDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace AngularMaterialUIDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class AngularMaterialUIDemoController : AbpController
    {
        protected AngularMaterialUIDemoController()
        {
            LocalizationResource = typeof(AngularMaterialUIDemoResource);
        }
    }
}