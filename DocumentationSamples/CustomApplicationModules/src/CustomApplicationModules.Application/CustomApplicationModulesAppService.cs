using System;
using System.Collections.Generic;
using System.Text;
using CustomApplicationModules.Localization;
using Volo.Abp.Application.Services;

namespace CustomApplicationModules
{
    /* Inherit your application services from this class.
     */
    public abstract class CustomApplicationModulesAppService : ApplicationService
    {
        protected CustomApplicationModulesAppService()
        {
            LocalizationResource = typeof(CustomApplicationModulesResource);
        }
    }
}
