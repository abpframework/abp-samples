using System;
using System.Collections.Generic;
using System.Text;
using ElsaDemo.Localization;
using Volo.Abp.Application.Services;

namespace ElsaDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class ElsaDemoAppService : ApplicationService
    {
        protected ElsaDemoAppService()
        {
            LocalizationResource = typeof(ElsaDemoResource);
        }
    }
}
