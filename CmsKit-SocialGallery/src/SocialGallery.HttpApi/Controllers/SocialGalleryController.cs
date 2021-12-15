using SocialGallery.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SocialGallery.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class SocialGalleryController : AbpControllerBase
    {
        protected SocialGalleryController()
        {
            LocalizationResource = typeof(SocialGalleryResource);
        }
    }
}