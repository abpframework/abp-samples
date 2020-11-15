using System.Collections.Generic;
using System.Threading.Tasks;
using EventOrganizer.Events;

namespace EventOrganizer.Blazor.Pages
{
    public partial class Index
    {
        private List<EventDto> UpcomingEvents { get; set; } = new List<EventDto>();

        private readonly IEventAppService _eventAppService;

        public Index(IEventAppService eventAppService)
        {
            _eventAppService = eventAppService;
        }

        protected override async Task OnInitializedAsync()
        {
            UpcomingEvents = await _eventAppService.GetUpcomingAsync();
        }
    }
}
