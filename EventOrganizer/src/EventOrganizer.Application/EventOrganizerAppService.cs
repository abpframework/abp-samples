using System;
using System.Collections.Generic;
using System.Text;
using EventOrganizer.Localization;
using Volo.Abp.Application.Services;

namespace EventOrganizer
{
    /* Inherit your application services from this class.
     */
    public abstract class EventOrganizerAppService : ApplicationService
    {
        protected EventOrganizerAppService()
        {
            LocalizationResource = typeof(EventOrganizerResource);
        }
    }
}
