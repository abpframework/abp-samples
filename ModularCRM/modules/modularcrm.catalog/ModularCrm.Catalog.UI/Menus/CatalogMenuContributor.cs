using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Catalog.UI.Menus;

public class CatalogMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(CatalogMenus.Prefix, displayName: "Catalog", "~/Catalog", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
