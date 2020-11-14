using System;
using System.Linq;
using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;

namespace EventOrganizer.Blazor.Pages
{
    public partial class EventDetail
    {
        [Parameter]
        public string Id { get; set; }

        private EventDetailDto Event { get; set; }
        private bool IsRegistered { get; set; }

        private readonly IEventAppService _eventAppService;
        private readonly NavigationManager _navigationManager;

        public EventDetail(
            IEventAppService eventAppService,
            NavigationManager navigationManager)
        {
            _eventAppService = eventAppService;
            _navigationManager = navigationManager;
        }

        protected override async Task OnInitializedAsync()
        {
            await GetEventAsync();
        }

        private async Task GetEventAsync()
        {
            Event = await _eventAppService.GetAsync(Guid.Parse(Id));
            if (CurrentUser.IsAuthenticated)
            {
                IsRegistered = Event.Attendees.Any(a => a.UserId == CurrentUser.Id);
            }
        }

        private async Task Register()
        {
            await _eventAppService.RegisterAsync(Guid.Parse(Id));
            await GetEventAsync();
        }

        private async Task UnRegister()
        {
            await _eventAppService.UnregisterAsync(Guid.Parse(Id));
            await GetEventAsync();
        }

        private async Task Delete()
        {
            if (!await Message.Confirm("This event will be deleted: " + Event.Title))
            {
                return;
            }

            await _eventAppService.DeleteAsync(Guid.Parse(Id));
            _navigationManager.NavigateTo("/");
        }
    }
}
