using ModularCrm.Localization;
using ModularCrm.Permissions;
using Volo.Abp.Account.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.SettingManagement.Blazor.Menus;
using Volo.Abp.UI.Navigation;
using Volo.Abp.Identity.Blazor;
using Volo.Abp.TenantManagement.Blazor.Navigation;

namespace ModularCrm.Menus;

public class ModularCrmMenuContributor : IMenuContributor
{
    private readonly IConfiguration _configuration;

    public ModularCrmMenuContributor(IConfiguration configuration)
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
        var l = context.GetLocalizer<ModularCrmResource>();

        context.Menu.AddItem(new ApplicationMenuItem(
            ModularCrmMenus.Home,
            l["Menu:Home"],
            "/",
            icon: "fas fa-home",
            order: 1
        ));

        /* Example nested menu definition:

        context.Menu.AddItem(
            new ApplicationMenuItem("Menu0", "Menu Level 0")
            .AddItem(new ApplicationMenuItem("Menu0.1", "Menu Level 0.1", url: "/test01"))
            .AddItem(
                new ApplicationMenuItem("Menu0.2", "Menu Level 0.2")
                    .AddItem(new ApplicationMenuItem("Menu0.2.1", "Menu Level 0.2.1", url: "/test021"))
                    .AddItem(new ApplicationMenuItem("Menu0.2.2", "Menu Level 0.2.2")
                        .AddItem(new ApplicationMenuItem("Menu0.2.2.1", "Menu Level 0.2.2.1", "/test0221"))
                        .AddItem(new ApplicationMenuItem("Menu0.2.2.2", "Menu Level 0.2.2.2", "/test0222"))
                    )
                    .AddItem(new ApplicationMenuItem("Menu0.2.3", "Menu Level 0.2.3", url: "/test023"))
                    .AddItem(new ApplicationMenuItem("Menu0.2.4", "Menu Level 0.2.4", url: "/test024")
                        .AddItem(new ApplicationMenuItem("Menu0.2.4.1", "Menu Level 0.2.4.1", "/test0241"))
                )
                .AddItem(new ApplicationMenuItem("Menu0.2.5", "Menu Level 0.2.5", url: "/test025"))
            )
            .AddItem(new ApplicationMenuItem("Menu0.2", "Menu Level 0.2", url: "/test02"))
        );

        */


        //Administration
        var administration = context.Menu.GetAdministration();
        administration.Order = 4;

        //Administration->Identity
        administration.SetSubItemOrder(IdentityMenuNames.GroupName, 1);

        //Administration->Tenant Management
        administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 2);

        //Administration->Settings
        administration.SetSubItemOrder(SettingManagementMenus.GroupName, 9);
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
