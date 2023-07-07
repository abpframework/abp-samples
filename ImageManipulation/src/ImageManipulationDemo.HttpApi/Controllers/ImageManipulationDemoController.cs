using ImageManipulationDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ImageManipulationDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ImageManipulationDemoController : AbpControllerBase
{
    protected ImageManipulationDemoController()
    {
        LocalizationResource = typeof(ImageManipulationDemoResource);
    }
}
