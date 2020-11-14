using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;

namespace EventOrganizer.Blazor.Pages
{
    public partial class CreateEvent
    {
        private EventCreationDto Event { get; set; } = new EventCreationDto();

        [Inject]
        private IEventAppService EventAppService { get; set; }

        [Inject]
        private NavigationManager NavigationManager { get; set; }

        private async Task Create()
        {
            var id = await EventAppService.CreateAsync(Event);
            NavigationManager.NavigateTo("/events/" + id);
        }
    }
}
