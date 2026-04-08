using System.Threading.Tasks;
using BookStore.Localization;
using Volo.Abp.UI.Navigation;

namespace BookStore.Mvc.Menus;

public class BookStoreMenuContributor : IMenuContributor
{
    public Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.Main)
        {
            var l = context.GetLocalizer<BookStoreResource>();

            context.Menu.Items.Add(new ApplicationMenuItem("Home", l["Menu:Home"], "/"));
            context.Menu.Items.Add(new ApplicationMenuItem("About", l["Menu:About"], "/About"));
            context.Menu.Items.Add(new ApplicationMenuItem("MvcDemo", "MVC Demo", "/Home/About"));
        }

        return Task.CompletedTask;
    }
}
