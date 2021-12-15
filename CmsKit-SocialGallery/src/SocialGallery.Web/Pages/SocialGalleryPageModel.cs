using SocialGallery.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SocialGallery.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class SocialGalleryPageModel : AbpPageModel
    {
        protected SocialGalleryPageModel()
        {
            LocalizationResourceType = typeof(SocialGalleryResource);
        }
    }
}