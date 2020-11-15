using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;

namespace EventOrganizer.Blazor.Pages
{
    public partial class CreateEvent
    {
        private EventCreationDto Event { get; set; } = new EventCreationDto();

        private readonly IEventAppService _eventAppService;
        private readonly NavigationManager _navigationManager;

        public CreateEvent(
            IEventAppService eventAppService,
            NavigationManager navigationManager)
        {
            _eventAppService = eventAppService;
            _navigationManager = navigationManager;
        }

        private async Task Create()
        {
            var eventId = await _eventAppService.CreateAsync(Event);
            _navigationManager.NavigateTo("/events/" + eventId);
        }
    }
}
