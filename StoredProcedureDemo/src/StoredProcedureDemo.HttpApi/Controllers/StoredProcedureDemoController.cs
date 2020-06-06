using StoredProcedureDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace StoredProcedureDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class StoredProcedureDemoController : AbpController
    {
        protected StoredProcedureDemoController()
        {
            LocalizationResource = typeof(StoredProcedureDemoResource);
        }
    }
}