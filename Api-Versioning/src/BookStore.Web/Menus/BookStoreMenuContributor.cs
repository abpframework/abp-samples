using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace BookStore.Web.Menus;

public class BookStoreMenuContributor : IMenuContributor
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
        //Add main menu items.
        context.Menu.AddItem(new ApplicationMenuItem(BookStoreMenus.Prefix, displayName: "BookStore", "~/BookStore", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
