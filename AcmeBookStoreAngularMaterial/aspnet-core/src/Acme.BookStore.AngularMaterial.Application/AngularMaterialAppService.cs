using System;
using System.Collections.Generic;
using System.Text;
using Acme.BookStore.AngularMaterial.Localization;
using Volo.Abp.Application.Services;

namespace Acme.BookStore.AngularMaterial
{
    /* Inherit your application services from this class.
     */
    public abstract class AngularMaterialAppService : ApplicationService
    {
        protected AngularMaterialAppService()
        {
            LocalizationResource = typeof(AngularMaterialResource);
        }
    }
}
