using IDSReferenceToken.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace IDSReferenceToken.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class IDSReferenceTokenController : AbpController
    {
        protected IDSReferenceTokenController()
        {
            LocalizationResource = typeof(IDSReferenceTokenResource);
        }
    }
}