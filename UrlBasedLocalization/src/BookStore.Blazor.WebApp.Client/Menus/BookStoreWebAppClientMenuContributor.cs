using System;
using System.Threading.Tasks;
using Volo.Abp.Account.Localization;
using Volo.Abp.UI.Navigation;

namespace BookStore.Blazor.WebApp.Client.Menus;

public class BookStoreWebAppClientMenuContributor : IMenuContributor
{
    public Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.User && OperatingSystem.IsBrowser())
        {
            var l = context.GetLocalizer<AccountResource>();

            context.Menu.AddItem(new ApplicationMenuItem(
                "Account.Manage",
                l["MyAccount"],
                url: "~/Account/Manage",
                icon: "fa fa-cog",
                order: 1000,
                target: "_blank"));
        }

        return Task.CompletedTask;
    }
}
