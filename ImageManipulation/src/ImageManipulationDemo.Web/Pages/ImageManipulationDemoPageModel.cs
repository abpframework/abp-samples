using ImageManipulationDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ImageManipulationDemo.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class ImageManipulationDemoPageModel : AbpPageModel
{
    protected ImageManipulationDemoPageModel()
    {
        LocalizationResourceType = typeof(ImageManipulationDemoResource);
    }
}
