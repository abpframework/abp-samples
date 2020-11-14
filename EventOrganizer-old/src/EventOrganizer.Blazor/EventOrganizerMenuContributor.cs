using System.Threading.Tasks;
using EventOrganizer.Localization;
using Volo.Abp.UI.Navigation;

namespace EventOrganizer.Blazor
{
    public class EventOrganizerMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<EventOrganizerResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "EventOrganizer.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
