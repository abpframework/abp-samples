using FileActionsDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FileActionsDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class FileActionsDemoController : AbpController
    {
        protected FileActionsDemoController()
        {
            LocalizationResource = typeof(FileActionsDemoResource);
        }
    }
}