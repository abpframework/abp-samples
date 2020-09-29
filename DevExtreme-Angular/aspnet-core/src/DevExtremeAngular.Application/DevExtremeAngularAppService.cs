using System;
using System.Collections.Generic;
using System.Text;
using DevExtremeAngular.Localization;
using Volo.Abp.Application.Services;

namespace DevExtremeAngular
{
    /* Inherit your application services from this class.
     */
    public abstract class DevExtremeAngularAppService : ApplicationService
    {
        protected DevExtremeAngularAppService()
        {
            LocalizationResource = typeof(DevExtremeAngularResource);
        }
    }
}
