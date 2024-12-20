using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Products.Web.Menus;

public class ProductsMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(ProductsMenus.Prefix, displayName: "Products", "~/Products", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
