using System;
using System.Collections.Generic;
using System.Text;
using IDSReferenceToken.Localization;
using Volo.Abp.Application.Services;

namespace IDSReferenceToken
{
    /* Inherit your application services from this class.
     */
    public abstract class IDSReferenceTokenAppService : ApplicationService
    {
        protected IDSReferenceTokenAppService()
        {
            LocalizationResource = typeof(IDSReferenceTokenResource);
        }
    }
}
