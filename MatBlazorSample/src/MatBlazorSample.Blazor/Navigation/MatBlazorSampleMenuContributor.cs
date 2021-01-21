using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MatBlazorSample.Localization;
using Volo.Abp.Account.Localization;
using Volo.Abp.AuditLogging.Blazor.Menus;
using Volo.Abp.Identity.Pro.Blazor.Navigation;
using Volo.Abp.IdentityServer.Blazor.Navigation;
using Volo.Abp.LanguageManagement.Blazor.Menus;
using Volo.Abp.SettingManagement.Blazor.Menus;
using Volo.Abp.TextTemplateManagement.Blazor.Menus;
using Volo.Abp.UI.Navigation;
using Volo.Abp.Users;
using Volo.Saas.Host.Blazor.Navigation;

namespace MatBlazorSample.Blazor.Navigation
{
    public class MatBlazorSampleMenuContributor : IMenuContributor
    {
        private readonly IConfiguration _configuration;

        public MatBlazorSampleMenuContributor(IConfiguration configuration)
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

        //This method was intentionally "async" because ABP Suite will generate asnyc method calls here.
        private static async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            var l = context.GetLocalizer<MatBlazorSampleResource>();

            context.Menu.AddItem(new ApplicationMenuItem(
                MatBlazorSampleMenus.Home,
                l["Menu:Home"],
                "/",
                icon: "fas fa-home",
                order: 1
            ));

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
            administration.Order = 2;

            //Administration->Saas
            administration.SetSubItemOrder(SaasHostMenus.GroupName, 1);

            //Administration->Identity
            administration.SetSubItemOrder(IdentityProMenus.GroupName, 2);

            //Administration->Identity Server
            administration.SetSubItemOrder(AbpIdentityServerMenuNames.GroupName, 3);

            //Administration->Language Management
            administration.SetSubItemOrder(LanguageManagementMenus.GroupName, 4);

            //Administration->Text Template Management
            administration.SetSubItemOrder(TextTemplateManagementMenus.GroupName, 5);

            //Administration->Audit Logs
            administration.SetSubItemOrder(AbpAuditLoggingMenus.GroupName, 6);

            //Administration->Settings
            administration.SetSubItemOrder(SettingManagementMenus.GroupName, 7);


        }

        private async Task ConfigureUserMenuAsync(MenuConfigurationContext context)
        {
            var accountStringLocalizer = context.GetLocalizer<AccountResource>();
            var currentUser = context.ServiceProvider.GetRequiredService<ICurrentUser>();

            var identityServerUrl = _configuration["AuthServer:Authority"] ?? "";

            if (currentUser.IsAuthenticated)
            {
                context.Menu.AddItem(new ApplicationMenuItem(
                    "Account.Manage",
                    accountStringLocalizer["ManageYourProfile"],
                    $"{identityServerUrl.EnsureEndsWith('/')}Account/Manage",
                    icon: "fa fa-cog",
                    order: 1000,
                    null,
                    "_blank"));
            }

            await Task.CompletedTask;
        }
    }
}
