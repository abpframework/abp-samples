using System;
using System.Collections.Generic;
using System.Text;
using SocialGallery.Localization;
using Volo.Abp.Application.Services;

namespace SocialGallery
{
    /* Inherit your application services from this class.
     */
    public abstract class SocialGalleryAppService : ApplicationService
    {
        protected SocialGalleryAppService()
        {
            LocalizationResource = typeof(SocialGalleryResource);
        }
    }
}
