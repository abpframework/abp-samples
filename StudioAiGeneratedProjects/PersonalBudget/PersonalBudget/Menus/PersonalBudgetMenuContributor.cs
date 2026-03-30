using System.Threading.Tasks;
using PersonalBudget.Permissions;
using PersonalBudget.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Identity.Web.Navigation;
using Volo.Abp.SettingManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;
using Volo.Abp.TenantManagement.Web.Navigation;

namespace PersonalBudget.Menus;

public class PersonalBudgetMenuContributor : IMenuContributor
{
    public async Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.Main)
        {
            await ConfigureMainMenuAsync(context);
        }
    }

    private static async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
    {
        var l = context.GetLocalizer<PersonalBudgetResource>();
        context.Menu.Items.Insert(
            0,
            new ApplicationMenuItem(
                PersonalBudgetMenus.Home,
                l["Menu:Home"],
                "~/",
                icon: "fas fa-home",
                order: 0
            )
        );

        if (await context.IsGrantedAsync(PersonalBudgetPermissions.Categories.Default))
        {
            context.Menu.Items.Insert(
                1,
                new ApplicationMenuItem(
                    PersonalBudgetMenus.Categories,
                    l["Menu:Categories"],
                    url: "/Categories",
                    icon: "fas fa-tags",
                    order: 1
                )
            );
        }

        if (await context.IsGrantedAsync(PersonalBudgetPermissions.Expenses.Default))
        {
            context.Menu.Items.Insert(
                2,
                new ApplicationMenuItem(
                    PersonalBudgetMenus.Expenses,
                    l["Menu:Expenses"],
                    url: "/Expenses",
                    icon: "fas fa-wallet",
                    order: 2
                )
            );
        }

        //Administration
        var administration = context.Menu.GetAdministration();
        administration.Order = 5;
        //Administration->Tenant Management
        administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 2);
        //Administration->Identity
        administration.SetSubItemOrder(IdentityMenuNames.GroupName, 2);

        //Administration->Settings
        administration.SetSubItemOrder(SettingManagementMenuNames.GroupName, 8);
        
    }
}
