using System;
using System.Collections.Generic;
using System.Text;
using TemplateReplace.Localization;
using Volo.Abp.Application.Services;

namespace TemplateReplace
{
    /* Inherit your application services from this class.
     */
    public abstract class TemplateReplaceAppService : ApplicationService
    {
        protected TemplateReplaceAppService()
        {
            LocalizationResource = typeof(TemplateReplaceResource);
        }
    }
}
