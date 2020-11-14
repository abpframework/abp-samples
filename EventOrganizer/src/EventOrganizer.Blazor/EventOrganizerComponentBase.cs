using EventOrganizer.Localization;
using Volo.Abp.AspNetCore.Components;

namespace EventOrganizer.Blazor
{
    public class EventOrganizerComponentBase : AbpComponentBase
    {
        public EventOrganizerComponentBase()
        {
            LocalizationResource = typeof(EventOrganizerResource);
        }
    }
}
