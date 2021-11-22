using System.Threading.Tasks;
using Acme.BookStore.BookManagement.Localization;
using Acme.BookStore.BookManagement.Permissions;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.UI.Navigation;

namespace Acme.BookStore.BookManagement.Web.Menus
{
    public class BookManagementMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            var l = context.GetLocalizer<BookManagementResource>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem("BookStore.Home", l["Menu:Home"], "~/"));

            var bookStoreMenu = new ApplicationMenuItem(
                "BooksStore",
                l["Menu:BookManagement"],
                icon: "fa fa-book"
            );

            context.Menu.AddItem(bookStoreMenu);

            //CHECK the PERMISSION
            if (await context.AuthorizationService.IsGrantedAsync(BookManagementPermissions.Books.Default))
            {
                bookStoreMenu.AddItem(new ApplicationMenuItem(
                    "BooksStore.Books",
                    l["Menu:Books"],
                    url: "/Books"
                ));
            }

            //CHECK the PERMISSION
            if (await context.AuthorizationService.IsGrantedAsync(BookManagementPermissions.Authors.Default))
            {
                bookStoreMenu.AddItem(new ApplicationMenuItem(
                    "BooksStore.Authors",
                    l["Menu:Authors"],
                    url: "/Authors"
                ));
            }
        }
    }
}