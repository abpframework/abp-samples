using System.Threading.Tasks;
using ClientSimulationDemo.Localization;
using Volo.Abp.UI.Navigation;

namespace ClientSimulationDemo.Blazor
{
    public class ClientSimulationDemoMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<ClientSimulationDemoResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "ClientSimulationDemo.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
