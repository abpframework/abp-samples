using System;
using System.Collections.Generic;
using System.Text;
using KeycloakDemo.Localization;
using Volo.Abp.Application.Services;

namespace KeycloakDemo;

/* Inherit your application services from this class.
 */
public abstract class KeycloakDemoAppService : ApplicationService
{
    protected KeycloakDemoAppService()
    {
        LocalizationResource = typeof(KeycloakDemoResource);
    }
}
