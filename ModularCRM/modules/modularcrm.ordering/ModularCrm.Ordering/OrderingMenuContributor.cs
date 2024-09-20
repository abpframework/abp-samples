using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Ordering
{
    public class OrderingMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                context.Menu.AddItem(
                    new ApplicationMenuItem(
                        "ModularCrm.Orders.Index", // Unique menu id
                        "Orders", // Menu display text
                        "~/Orders", // URL
                        "fa-solid fa-basket-shopping" // Icon CSS class
                    )
                );
            }

            return Task.CompletedTask;
        }
    }
}
