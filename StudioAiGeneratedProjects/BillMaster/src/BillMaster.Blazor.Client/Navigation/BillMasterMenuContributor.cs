using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using BillMaster.Localization;
using BillMaster.Permissions;
using BillMaster.MultiTenancy;
using Volo.Abp.Account.Localization;
using Volo.Abp.UI.Navigation;
using Localization.Resources.AbpUi;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.SettingManagement.Blazor.Menus;
using Volo.Abp.Users;
using Volo.Abp.TenantManagement.Blazor.Navigation;
using Volo.Abp.Identity.Blazor;

namespace BillMaster.Blazor.Client.Navigation;

public class BillMasterMenuContributor : IMenuContributor
{
    private readonly IConfiguration _configuration;

    public BillMasterMenuContributor(IConfiguration configuration)
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
        var l = context.GetLocalizer<BillMasterResource>();
        
        //Administration
        var administration = context.Menu.GetAdministration();
        administration.Order = 6;

        context.Menu.AddItem(new ApplicationMenuItem(
            BillMasterMenus.Home,
            l["Menu:Home"],
            "/",
            icon: "fas fa-home",
            order: 1
        ));
        
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
    
        var bookStoreMenu = new ApplicationMenuItem(
            "BooksStore",
            l["Menu:Books"],
            icon: "fa fa-book"
        );

        context.Menu.AddItem(bookStoreMenu);

        //CHECK the PERMISSION
        if (await context.IsGrantedAsync(BillMasterPermissions.Books.Default))
        {
            bookStoreMenu.AddItem(new ApplicationMenuItem(
                "BooksStore.Books",
                l["Menu:Books"],
                url: "/books"
            ));
        }
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
        else
        {
            //Blazor server menu items

        }
        await Task.CompletedTask;
    }
}
