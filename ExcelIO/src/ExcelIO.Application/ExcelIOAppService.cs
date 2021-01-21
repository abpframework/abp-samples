using System;
using System.Collections.Generic;
using System.Text;
using ExcelIO.Localization;
using Volo.Abp.Application.Services;

namespace ExcelIO
{
    /* Inherit your application services from this class.
     */
    public abstract class ExcelIOAppService : ApplicationService
    {
        protected ExcelIOAppService()
        {
            LocalizationResource = typeof(ExcelIOResource);
        }
    }
}
