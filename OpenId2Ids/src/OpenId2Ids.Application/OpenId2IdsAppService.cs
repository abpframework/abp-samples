using System;
using System.Collections.Generic;
using System.Text;
using OpenId2Ids.Localization;
using Volo.Abp.Application.Services;

namespace OpenId2Ids;

/* Inherit your application services from this class.
 */
public abstract class OpenId2IdsAppService : ApplicationService
{
    protected OpenId2IdsAppService()
    {
        LocalizationResource = typeof(OpenId2IdsResource);
    }
}
