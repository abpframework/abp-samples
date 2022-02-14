using System;
using System.Collections.Generic;
using System.Text;
using TelerikUIExample.Localization;
using Volo.Abp.Application.Services;

namespace TelerikUIExample;

/* Inherit your application services from this class.
 */
public abstract class TelerikUIExampleAppService : ApplicationService
{
    protected TelerikUIExampleAppService()
    {
        LocalizationResource = typeof(TelerikUIExampleResource);
    }
}
