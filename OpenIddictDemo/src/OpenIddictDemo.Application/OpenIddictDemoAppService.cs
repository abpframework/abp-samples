using System;
using System.Collections.Generic;
using System.Text;
using OpenIddictDemo.Localization;
using Volo.Abp.Application.Services;

namespace OpenIddictDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class OpenIddictDemoAppService : ApplicationService
    {
        protected OpenIddictDemoAppService()
        {
            LocalizationResource = typeof(OpenIddictDemoResource);
        }
    }
}
