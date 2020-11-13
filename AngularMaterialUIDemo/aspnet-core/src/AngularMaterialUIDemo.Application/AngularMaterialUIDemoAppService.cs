using System;
using System.Collections.Generic;
using System.Text;
using AngularMaterialUIDemo.Localization;
using Volo.Abp.Application.Services;

namespace AngularMaterialUIDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class AngularMaterialUIDemoAppService : ApplicationService
    {
        protected AngularMaterialUIDemoAppService()
        {
            LocalizationResource = typeof(AngularMaterialUIDemoResource);
        }
    }
}
