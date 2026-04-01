using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using QuickBills.Localization;
using QuickBills.Permissions;
using QuickBills.MultiTenancy;
using Volo.Abp.Account.Localization;
using Volo.Abp.UI.Navigation;
using Localization.Resources.AbpUi;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.SettingManagement.Blazor.Menus;
using Volo.Abp.Users;
using Volo.Abp.TenantManagement.Blazor.Navigation;
using Volo.Abp.Identity.Blazor;

namespace QuickBills.Blazor.Client.Navigation;

public class QuickBillsMenuContributor : IMenuContributor
{
    private readonly IConfiguration _configuration;

    public QuickBillsMenuContributor(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.Main)
        {
            await ConfigureMainMenuAsync(context);
        }

        else if (context.Menu.Name == StandardMenus.User)
        {
            await ConfigureUserMenuAsync(context);
        }
    }

    private static async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
    {
        var l = context.GetLocalizer<QuickBillsResource>();
        
        //Administration
        var administration = context.Menu.GetAdministration();
        administration.Order = 6;

        context.Menu.AddItem(new ApplicationMenuItem(
            QuickBillsMenus.Home,
            l["Menu:Home"],
            "/",
            icon: "fas fa-home",
            order: 1
        ));

        context.Menu.AddItem(new ApplicationMenuItem(
            QuickBillsMenus.Customers,
            l["Menu:Customers"],
            "/customers",
            icon: "fas fa-users",
            order: 2
        ).RequirePermissions(QuickBillsPermissions.Customers.Default));

        context.Menu.AddItem(new ApplicationMenuItem(
            QuickBillsMenus.Invoices,
            l["Menu:Invoices"],
            "/invoices",
            icon: "fas fa-file-invoice",
            order: 3
        ).RequirePermissions(QuickBillsPermissions.Invoices.Default));
        
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
    }
    
    private async Task ConfigureUserMenuAsync(MenuConfigurationContext context)
    {
        if (OperatingSystem.IsBrowser())
        {
            //Blazor wasm menu items

            var authServerUrl = _configuration["AuthServer:Authority"] ?? "";
            var accountResource = context.GetLocalizer<AccountResource>();

            context.Menu.AddItem(new ApplicationMenuItem("Account.Manage", accountResource["MyAccount"], $"{authServerUrl.EnsureEndsWith('/')}Account/Manage", icon: "fa fa-cog", order: 900,  target: "_blank").RequireAuthenticated());

        }
        await Task.CompletedTask;
    }
}
