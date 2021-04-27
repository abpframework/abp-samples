using System.Threading.Tasks;
using SyncfusionSample.Localization;
using SyncfusionSample.MultiTenancy;
using Volo.Abp.Identity.Blazor;
using Volo.Abp.SettingManagement.Blazor.Menus;
using Volo.Abp.TenantManagement.Blazor.Navigation;
using Volo.Abp.UI.Navigation;

namespace SyncfusionSample.Blazor.Menus
{
    public class SyncfusionSampleMenuContributor : IMenuContributor
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
            var administration = context.Menu.GetAdministration();
            var l = context.GetLocalizer<SyncfusionSampleResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    SyncfusionSampleMenus.Home,
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home",
                    order: 0
                )
            );

            context.Menu.AddItem(
                new ApplicationMenuItem(
                    "BooksStore",
                    l["Menu:BookStore"],
                    icon: "fa fa-book"
                ).AddItem(
                    new ApplicationMenuItem(
                        "BooksStore.Books",
                        l["Menu:Books"],
                        url: "/books"
                    )
                )
            );

            if (MultiTenancyConsts.IsEnabled)
            {
                administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 1);
            }
            else
            {
                administration.TryRemoveMenuItem(TenantManagementMenuNames.GroupName);
            }

            administration.SetSubItemOrder(IdentityMenuNames.GroupName, 2);
            administration.SetSubItemOrder(SettingManagementMenus.GroupName, 3);

            return Task.CompletedTask;
        }
    }
}
