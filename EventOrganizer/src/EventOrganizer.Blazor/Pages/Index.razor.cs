using System.Collections.Generic;
using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;

namespace EventOrganizer.Blazor.Pages
{
    public partial class Index
    {
        private List<EventDto> UpcomingEvents { get; set; } = new List<EventDto>();

        [Inject]
        private IEventAppService EventAppService { get; set; }

        protected override async Task OnInitializedAsync()
        {
            UpcomingEvents = await EventAppService.GetUpcomingAsync();
        }
    }
}
