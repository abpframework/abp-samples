using System;
using System.Collections.Generic;
using System.Text;
using StoredProcedureDemo.Localization;
using Volo.Abp.Application.Services;

namespace StoredProcedureDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class StoredProcedureDemoAppService : ApplicationService
    {
        protected StoredProcedureDemoAppService()
        {
            LocalizationResource = typeof(StoredProcedureDemoResource);
        }
    }
}
