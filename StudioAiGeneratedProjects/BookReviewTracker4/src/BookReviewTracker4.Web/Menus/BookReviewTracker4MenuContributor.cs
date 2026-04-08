using System.Threading.Tasks;
using BookReviewTracker4.Localization;
using BookReviewTracker4.MultiTenancy;
using Volo.Abp.SettingManagement.Web.Navigation;
using Volo.Abp.Identity.Web.Navigation;
using Volo.Abp.UI.Navigation;
using Volo.Abp.TenantManagement.Web.Navigation;

namespace BookReviewTracker4.Web.Menus;

public class BookReviewTracker4MenuContributor : IMenuContributor
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
        var l = context.GetLocalizer<BookReviewTracker4Resource>();

        // Home
        context.Menu.AddItem(
            new ApplicationMenuItem(
                BookReviewTracker4Menus.Home,
                l["Menu:Home"],
                "~/",
                icon: "fa fa-home",
                order: 1
            )
        );

        // Dashboard
        context.Menu.AddItem(
            new ApplicationMenuItem(
                BookReviewTracker4Menus.Dashboard,
                l["Menu:Dashboard"],
                "/Dashboard",
                icon: "fa fa-chart-line",
                order: 2
            )
        );

        // Authors
        context.Menu.AddItem(
            new ApplicationMenuItem(
                BookReviewTracker4Menus.Authors,
                l["Menu:Authors"],
                "/Authors",
                icon: "fa fa-user-pen",
                order: 3
            )
        );

        // Books
        context.Menu.AddItem(
            new ApplicationMenuItem(
                BookReviewTracker4Menus.Books,
                l["Menu:Books"],
                "/Books",
                icon: "fa fa-book",
                order: 4
            )
        );

        // Reviews
        context.Menu.AddItem(
            new ApplicationMenuItem(
                BookReviewTracker4Menus.Reviews,
                l["Menu:Reviews"],
                "/Reviews",
                icon: "fa fa-star",
                order: 5
            )
        );

        // Administration
        var administration = context.Menu.GetAdministration();
        administration.Order = 6;

        administration.SetSubItemOrder(IdentityMenuNames.GroupName, 1);

        if (MultiTenancyConsts.IsEnabled)
        {
            administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 1);
        }
        else
        {
            administration.TryRemoveMenuItem(TenantManagementMenuNames.GroupName);
        }

        administration.SetSubItemOrder(SettingManagementMenuNames.GroupName, 3);

        return Task.CompletedTask;
    }
}
