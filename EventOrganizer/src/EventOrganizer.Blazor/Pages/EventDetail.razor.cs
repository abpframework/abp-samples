using System;
using System.Linq;
using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;
using Volo.Abp.AspNetCore.Components.WebAssembly;
using Volo.Abp.Users;

namespace EventOrganizer.Blazor.Pages
{
    public partial class EventDetail
    {
        [Parameter]
        public string Id { get; set; }

        [Inject]
        private IEventAppService EventAppService { get; set; }

        [Inject]
        private ICurrentUser CurrentUser { get; set; }

        [Inject]
        private NavigationManager NavigationManager { get; set; }

        [Inject]
        private IUiMessageService MessageService { get; set; }

        private EventDetailDto Event { get; set; }

        private bool IsRegistered { get; set; }

        protected override async Task OnInitializedAsync()
        {
            await GetEventAsync();
        }

        private async Task GetEventAsync()
        {
            Event = await EventAppService.GetAsync(Guid.Parse(Id));
            if (CurrentUser.IsAuthenticated)
            {
                IsRegistered = Event.Attendees.Any(a => a.UserId == CurrentUser.Id);
            }
        }

        private async Task Register()
        {
            await EventAppService.RegisterAsync(Guid.Parse(Id));
            await GetEventAsync();
        }

        private async Task UnRegister()
        {
            await EventAppService.UnRegisterAsync(Guid.Parse(Id));
            await GetEventAsync();
        }

        private async Task Delete()
        {
            if (!await MessageService.ConfirmAsync("This event will be deleted: " + Event.Title))
            {
                return;
            }

            await EventAppService.DeleteAsync(Guid.Parse(Id));
            NavigationManager.NavigateTo("/");
        }
    }
}
