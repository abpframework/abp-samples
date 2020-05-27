using System;
using System.Collections.Generic;
using System.Text;
using GrpcDemo.Localization;
using Volo.Abp.Application.Services;

namespace GrpcDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class GrpcDemoAppService : ApplicationService
    {
        protected GrpcDemoAppService()
        {
            LocalizationResource = typeof(GrpcDemoResource);
        }
    }
}
