using ExcelIO.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ExcelIO.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ExcelIOController : AbpController
    {
        protected ExcelIOController()
        {
            LocalizationResource = typeof(ExcelIOResource);
        }
    }
}