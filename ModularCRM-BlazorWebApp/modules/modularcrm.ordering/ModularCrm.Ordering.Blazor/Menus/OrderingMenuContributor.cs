using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Ordering.Blazor.Menus;

public class OrderingMenuContributor : IMenuContributor
{
    public async Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.Main)
        {
            await ConfigureMainMenuAsync(context);
        }
    }

    private Task ConfigureMainMenuAsync(MenuConfigurationContext context)
    {
        context.Menu.AddItem(
            new ApplicationMenuItem(
                OrderingMenus.Prefix, // Unique menu id
                "Orders", // Menu display text
                "/ordering", // URL
                "fa-solid fa-basket-shopping" // Icon CSS class
            )
        );

        return Task.CompletedTask;
    }
}