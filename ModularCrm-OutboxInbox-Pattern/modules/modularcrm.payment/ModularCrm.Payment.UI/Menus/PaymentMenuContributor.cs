using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace ModularCrm.Payment.UI.Menus;

public class PaymentMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(PaymentMenus.Prefix, displayName: "Payment", "~/Payment", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
