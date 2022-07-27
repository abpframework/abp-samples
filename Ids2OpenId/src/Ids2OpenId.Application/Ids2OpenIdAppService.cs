using System;
using System.Collections.Generic;
using System.Text;
using Ids2OpenId.Localization;
using Volo.Abp.Application.Services;

namespace Ids2OpenId;

/* Inherit your application services from this class.
 */
public abstract class Ids2OpenIdAppService : ApplicationService
{
    protected Ids2OpenIdAppService()
    {
        LocalizationResource = typeof(Ids2OpenIdResource);
    }
}
