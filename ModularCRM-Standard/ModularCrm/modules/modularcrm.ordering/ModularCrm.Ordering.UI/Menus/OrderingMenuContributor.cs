using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Ordering.UI.Menus;

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
                OrderingMenus.Prefix,
                "Orders",
                "~/Ordering",
                "fa-solid fa-basket-shopping"
            )
        );
        
        return Task.CompletedTask;
    }
}
